import { SOURCE_CODE_GITHUB_REPO } from "@/config/site"
import { GitHubStars } from "@/components/github-stars"

export async function NavItemGitHub() {
  return <GitHubStars repo={SOURCE_CODE_GITHUB_REPO} stargazersCount={0} />
}
