import "server-only"

import { getCachedContributions } from "@/registry/components/github-contributions/lib/get-cached-contributions"

export function getGitHubContributions() {
  return getCachedContributions("rehaniranii")
}
