export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
  topics: string[];
}

export interface EnhancedRepo extends GitHubRepo {
  generatedDescription: string;
  techStack: string[];
}

export const repoDescriptions: Record<string, { description: string; techStack: string[] }> = {
  "contact-picker": {
    description: "A lightweight Android library for selecting contacts without requiring READ_CONTACTS permission, built with AndroidX support for modern Android development. Simplifies contact selection while maintaining user privacy.",
    techStack: ["Android", "Kotlin", "Java", "AndroidX", "Library", "Mobile"],
  },
  "git-cheatsheet": {
    description: "A comprehensive collection of essential Git commands and workflows for developers to efficiently manage version control. Covers branching, merging, rebasing, and collaboration best practices.",
    techStack: ["Git", "Documentation", "Developer Tools", "Version Control"],
  },
  "pidgets": {
    description: "A collection of custom Android widgets and utilities designed to streamline UI development and enhance user experience in mobile applications. Reusable components for faster development.",
    techStack: ["Android", "Kotlin", "Java", "UI Components", "Widgets", "Mobile"],
  },
  "pidget-design": {
    description: "A library of reusable Android drawables and styles for everyday development, providing consistent and beautiful UI elements. Accelerates UI development with pre-designed assets.",
    techStack: ["Android", "XML", "UI Design", "Drawables", "Material Design"],
  },
  "linux-commands": {
    description: "An essential reference of Linux commands for developers and system administrators, covering daily operations, file management, process control, and advanced system administration tasks.",
    techStack: ["Linux", "Shell", "Bash", "DevOps", "System Administration", "CLI"],
  },
  "rutn": {
    description: "A modern web application built with cutting-edge technologies, showcasing full-stack development capabilities and best practices in performance, scalability, and user experience.",
    techStack: ["TypeScript", "Next.js", "React", "Node.js", "Modern Web"],
  },
  "service-locator-pattern": {
    description: "A clean implementation of the Service Locator design pattern in Java, demonstrating enterprise architecture principles, dependency management, and inversion of control patterns.",
    techStack: ["Java", "Design Patterns", "Software Architecture", "Enterprise"],
  },
  "farhad.github.io": {
    description: "Personal portfolio website showcasing projects, skills, and professional experience as a Full Stack Developer. Built with modern web technologies and best practices.",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Portfolio"],
  },
  "no-subtitle": {
    description: "A Java utility application that recursively cleans up subtitle files (SRT and VTT) from directories, perfect for media library organization and batch file processing.",
    techStack: ["Java", "File Processing", "Utility", "Automation"],
  },
  "launchmode-demo": {
    description: "An Android demonstration project illustrating different Activity launch modes (standard, singleTop, singleTask, singleInstance) with practical examples and use cases.",
    techStack: ["Android", "Kotlin", "Java", "Mobile Development", "Education"],
  },
  "crypto-portfolio": {
    description: "A cryptocurrency portfolio tracking application with real-time price updates, portfolio analytics, and market data visualization using modern web technologies.",
    techStack: ["React", "TypeScript", "API Integration", "Crypto", "Web3"],
  },
  "ai-chatbot": {
    description: "An AI-powered chatbot application integrating OpenAI's GPT models with custom prompts and conversation management for enhanced user interactions.",
    techStack: ["Node.js", "OpenAI API", "Express", "AI", "Chatbot"],
  },
  "ecommerce-platform": {
    description: "A full-stack e-commerce platform with product management, shopping cart, payment integration, and order tracking built with MERN stack.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "MERN", "E-commerce"],
  },
  "task-manager": {
    description: "A productivity task management application with features for task creation, prioritization, deadlines, and progress tracking with intuitive UI.",
    techStack: ["React", "Node.js", "MongoDB", "Productivity", "Web App"],
  },
  "weather-dashboard": {
    description: "A weather forecasting dashboard displaying real-time weather data, forecasts, and interactive maps using weather API integration.",
    techStack: ["React", "API Integration", "JavaScript", "Weather", "Dashboard"],
  },
};
