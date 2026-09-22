import { USER } from "@/features/portfolio/data/user"

export default function Page() {
  return (
    <div className="max-w-screen overflow-x-clip">
      <div className="absolute top-24 left-24 size-[512px] opacity-10">
        <span className="text-6xl font-bold">{USER.displayName}</span>
      </div>
    </div>
  )
}
