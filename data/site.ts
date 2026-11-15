// All site content lives here. Edit this file to update the portfolio.

export const site = {
  name: "Daniel Nguyen",
  email: "you@example.com", // TODO
  location: "Austin, TX",
  github: "https://github.com/danielnguyen327",
  githubLabel: "github.com/danielnguyen327",
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO
  resume: "/resume.pdf", // put your PDF at public/resume.pdf
  badge: "M.S. Computer Science · UT Austin",
  tagline: "Full-stack engineer with an ML edge.",
  intro:
    "I'm Daniel. I build web apps, APIs and LLM-powered tools with Python, Java and TypeScript.",
  lookingFor: "Software engineering internships & new-grad roles · Austin or remote",
  description:
    "Daniel Nguyen is a software engineer in Austin, TX, building full-stack products and LLM-powered tools.",
};

export const about = {
  bio: "I'm a software engineer in Austin, finishing my M.S. in Computer Science at UT Austin. I like building complete products, from the API and database to the interface, and I've been adding LLMs and deep learning to that toolkit.",
  headshot: "", // e.g. "/headshot.jpg" in public/; leave empty for a placeholder
  skills: [
    { group: "Languages", items: "Python, Java, TypeScript, SQL" },
    { group: "Frameworks", items: "FastAPI, Spring Boot, React, Next.js" },
    { group: "ML & Infra", items: "PyTorch, LLM apps, PostgreSQL, Docker" },
  ],
};

export type Project = {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  href: string;
  image?: string; // e.g. "/projects/earnings.png" in public/
};

export const projects: Project[] = [
  {
    title: "Earnings Call Analyzer",
    kind: "LLM app",
    description: "Highlights changes in guidance and tone across earnings calls.",
    tags: ["Python", "LLM APIs", "NLP"],
    href: "https://github.com/danielnguyen327",
  },
  {
    title: "Automated Bank Sync",
    kind: "automation",
    description: "Every account in one ledger, pulled and categorized automatically.",
    tags: ["Python", "APIs", "PostgreSQL"],
    href: "https://github.com/danielnguyen327",
  },
  {
    title: "Vision & Planning Models",
    kind: "deep learning",
    description: "Perception and planning networks trained from scratch.",
    tags: ["PyTorch"],
    href: "https://github.com/danielnguyen327",
  },
  {
    title: "Voice Assistant Email",
    kind: "full-stack",
    description: "Voice-driven Gmail client for visually impaired users.",
    tags: ["Django", "Python", "JS"],
    href: "https://github.com/danielnguyen327",
  },
];
