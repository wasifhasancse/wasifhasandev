import { PortfolioClient } from "../components/PortfolioClient";
import { getGithubProfile, getGithubRepos } from "../lib/github";

export default async function HomePage() {
  const [repos, profile] = await Promise.all([
    getGithubRepos(),
    getGithubProfile(),
  ]);
  return <PortfolioClient repos={repos} profile={profile} />;
}
