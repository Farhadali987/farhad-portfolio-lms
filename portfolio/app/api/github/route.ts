import { NextResponse } from "next/server";
import { repoDescriptions, type EnhancedRepo } from "@/data/github";

const GITHUB_USERNAME = "farhad";

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }

    const repos = await response.json();

    // Filter out forked repositories and enhance with descriptions
    const enhancedRepos = repos
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => {
        const repoData = repoDescriptions[repo.name as keyof typeof repoDescriptions];
        
        return {
          ...repo,
          generatedDescription: repoData?.description || `A ${repo.language || "software"} project showcasing development skills and best practices.`,
          techStack: repoData?.techStack || [repo.language || "Code"].slice(0, 5),
        } as EnhancedRepo;
      });

    return NextResponse.json(enhancedRepos);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    
    // Fallback to static data if API fails
    const fallbackRepos: EnhancedRepo[] = [
      {
        id: 1,
        name: "contact-picker",
        description: "A lightweight Android library for selecting contacts without requiring READ_CONTACTS permission.",
        html_url: "https://github.com/farhad/contact-picker",
        stargazers_count: 15,
        forks_count: 3,
        language: "Java",
        created_at: "2019-08-05T19:44:53Z",
        updated_at: "2024-12-18T09:39:57Z",
        topics: ["android", "library", "contacts"],
        generatedDescription: repoDescriptions["contact-picker"].description,
        techStack: repoDescriptions["contact-picker"].techStack,
      },
      {
        id: 2,
        name: "linux-commands",
        description: "An essential reference of Linux commands for developers and system administrators.",
        html_url: "https://github.com/farhad/linux-commands",
        stargazers_count: 25,
        forks_count: 8,
        language: "Shell",
        created_at: "2020-01-12T21:25:25Z",
        updated_at: "2025-10-26T01:44:56Z",
        topics: ["linux", "commands", "bash"],
        generatedDescription: repoDescriptions["linux-commands"].description,
        techStack: repoDescriptions["linux-commands"].techStack,
      },
      {
        id: 3,
        name: "no-subtitle",
        description: "A Java utility application that recursively cleans up subtitle files from directories.",
        html_url: "https://github.com/farhad/no-subtitle",
        stargazers_count: 5,
        forks_count: 1,
        language: "Java",
        created_at: "2024-01-22T05:31:00Z",
        updated_at: "2025-04-13T16:22:11Z",
        topics: ["java", "utility", "file-processing"],
        generatedDescription: repoDescriptions["no-subtitle"].description,
        techStack: repoDescriptions["no-subtitle"].techStack,
      },
      {
        id: 4,
        name: "service-locator-pattern",
        description: "A clean implementation of the Service Locator design pattern in Java.",
        html_url: "https://github.com/farhad/service-locator-pattern",
        stargazers_count: 8,
        forks_count: 2,
        language: "Java",
        created_at: "2021-11-16T06:03:02Z",
        updated_at: "2025-10-26T00:46:21Z",
        topics: ["java", "design-patterns", "architecture"],
        generatedDescription: repoDescriptions["service-locator-pattern"].description,
        techStack: repoDescriptions["service-locator-pattern"].techStack,
      },
      {
        id: 5,
        name: "pidgets",
        description: "A collection of custom Android widgets and utilities for streamlined UI development.",
        html_url: "https://github.com/farhad/pidgets",
        stargazers_count: 12,
        forks_count: 4,
        language: "Java",
        created_at: "2017-04-22T13:35:13Z",
        updated_at: "2018-05-05T07:45:22Z",
        topics: ["android", "widgets", "ui"],
        generatedDescription: repoDescriptions["pidgets"].description,
        techStack: repoDescriptions["pidgets"].techStack,
      },
      {
        id: 6,
        name: "git-cheatsheet",
        description: "A comprehensive collection of essential Git commands for developers.",
        html_url: "https://github.com/farhad/git-cheatsheet",
        stargazers_count: 18,
        forks_count: 6,
        language: null,
        created_at: "2018-04-09T19:52:25Z",
        updated_at: "2023-09-08T17:39:05Z",
        topics: ["git", "documentation", "cheatsheet"],
        generatedDescription: repoDescriptions["git-cheatsheet"].description,
        techStack: repoDescriptions["git-cheatsheet"].techStack,
      },
    ];

    return NextResponse.json(fallbackRepos);
  }
}
