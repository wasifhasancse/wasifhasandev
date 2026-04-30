const githubUsername =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME || "wasifhasancse";

const mapCategory = (repo) => {
  const text =
    `${repo.name} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  const language = (repo.language || "").toLowerCase();

  if (text.includes("full stack") || text.includes("mern")) return "full-stack";
  if (
    language.includes("javascript") ||
    language.includes("typescript") ||
    text.includes("react") ||
    text.includes("next")
  )
    return "react";
  if (text.includes("node") || text.includes("express") || text.includes("api"))
    return "backend";
  return "other";
};

const headers = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export async function getGithubProfile() {
  const response = await fetch(
    `https://api.github.com/users/${githubUsername}`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) return null;
  return response.json();
}

export async function getGithubRepos() {
  const response = await fetch(
    `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=18`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) return [];

  const repos = await response.json();

  return repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description provided yet.",
      html_url: repo.html_url,
      homepage: repo.homepage || "",
      language: repo.language || "Unknown",
      topics: repo.topics || [],
      stargazers_count: repo.stargazers_count,
      updated_at: repo.updated_at,
      category: mapCategory(repo),
    }));
}
