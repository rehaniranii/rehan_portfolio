import { NextResponse } from "next/server"
import { decodeEmail, decodePhoneNumber } from "@/utils/string"
import sharp from "sharp"
import VCard from "vcard-creator"

import { USER } from "@/features/portfolio/data/user"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function GET() {
  const card = new VCard()

  card
    .addName(USER.lastName, USER.firstName)
    .addPhoneNumber(decodePhoneNumber(USER.phoneNumberB64))
    .addAddress(USER.address)
    .addEmail(decodeEmail(USER.emailB64))

  if (USER.website) {
    card.addURL(USER.website)
  }

  const photo = await getVCardPhoto(USER.avatar)
  if (photo) {
    card.addPhoto(photo.image, photo.mime)
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0]
    card.addCompany(company.company).addJobtitle(company.title)
  } else {
    card.addJobtitle(USER.jobTitle)
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  })
}

async function getVCardPhoto(url: string) {
  try {
    let buffer: Buffer
    let contentType = ""

    if (url.startsWith("/")) {
      const fs = await import("fs/promises")
      const path = await import("path")
      const filePath = path.join(process.cwd(), "public", url)
      buffer = await fs.readFile(filePath)
      contentType = url.endsWith(".png")
        ? "image/png"
        : url.endsWith(".webp")
          ? "image/webp"
          : "image/jpeg"
    } else {
      const res = await fetch(url)
      if (!res.ok) {
        return null
      }
      buffer = Buffer.from(await res.arrayBuffer())
      contentType = res.headers.get("Content-Type") || ""
    }

    if (buffer.length === 0 || !contentType.startsWith("image/")) {
      return null
    }

    const jpegBuffer = await convertImageToJpeg(buffer)
    const image = jpegBuffer.toString("base64")

    return {
      image,
      mime: "jpeg",
    }
  } catch {
    return null
  }
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
  try {
    const jpegBuffer = await sharp(imageBuffer)
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
      })
      .toBuffer()

    return jpegBuffer
  } catch (error) {
    console.error("Error converting image to JPEG:", error)
    throw error
  }
}
