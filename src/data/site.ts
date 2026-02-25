// ── Type Definitions ──────────────────────────────────────────────

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // SVG path data (d attribute)
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  venueNumber?: string;
  year: number;
  url?: string;
  repoUrl?: string;
  abstract?: string;
  highlights?: string[];
}

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface TimelineEntry {
  organization: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  type: "work" | "education" | "internship" | "volunteer" | "teaching" | "research";
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ArtProject {
  title: string;
  description: string;
  url?: string;
  repoUrl?: string;
}

export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    siteUrl: string;
  };
  nav: {
    links: { label: string; href: string }[];
  };
  home: {
    greeting: string;
    tagline: string;
    profileImage: string; // Path relative to /public
    bio: string[];
    location: string;
    socialLinks: SocialLink[];
  };
  research: {
    intro: string;
    publications: Publication[];
    interests: ResearchInterest[];
    futureDirections: string[];
  };
  cv: {
    research: TimelineEntry[];
    experience: TimelineEntry[];
    education: TimelineEntry[];
    teaching: TimelineEntry[];
    skills: Skill[];
    volunteer?: TimelineEntry[];
  };
  art: {
    intro: string;
    projects: ArtProject[];
  };
  footer: {
    copyright: string;
  };
}

// ── Site Data ─────────────────────────────────────────────────────

export const site: SiteConfig = {
  meta: {
    title: "Mathewe Banda",
    description:
      "Computer scientist focused on interpretable AI and reinforcement learning. Also makes art with math.",
    siteUrl: "https://mathewe.com",
  },

  nav: {
    links: [
      { label: "About", href: "/" },
      { label: "Research", href: "/research" },
      { label: "CV", href: "/cv" },
      { label: "Projects", href: "/projects" },
    ],
  },

  home: {
    greeting: "Mathewe Banda",
    tagline: "Computer Scientist",
    profileImage: "/profile.png",
    bio: [
      "I'm a computer scientist with a passion for research and developing AI systems that are transparent, reliable, and useful.",
      "I graduated with High Honors from Oberlin College in Computer Science with a minor in Mathematics. My honors thesis explored multi-agent reinforcement learning and game theory, and I've continued developing that work independently since graduation.",
      "I joined Google to learn how to turn research ideas into working systems. Over five years, I led applied research on LLM-driven developer automation and developed methods for constructing structured training data from large C++/Java codebases. I collaborated with DeepMind and CoreML on data specifications for Google's internal models and developed an unsupervised approach to root-cause diagnosis for Android using clustering on T5X embeddings.",
      "My research focuses on interpretable AI and data-efficient reinforcement learning, and I'm currently applying to PhD programs in computer science.",
      "Outside of work, I create digital images using linear optimization and constraints, building on independent research with Professor Robert Bosch at Oberlin. You can find my art and methodology at madebymath.art.",
    ],
    location: "San Francisco, CA",
    socialLinks: [
      {
        label: "GitHub",
        url: "https://github.com/MatheweB",
        icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/matheweb",
        icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      },
      {
        label: "ORCID",
        url: "https://orcid.org/0000-0003-1975-8009",
        icon: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.05-2.484 4.05-3.722 0-1.847-1.228-3.722-3.813-3.722h-2.534z",
      },
    ],
  },

  research: {
    intro:
      "My research centers on interpretable AI and reinforcement learning: designing systems whose decisions can be understood, trusted, and improved by humans. I favor transparent approaches over black-box models, and I believe that if we can't explain why a system makes its decisions, we can't truly trust it.",
    publications: [
      {
        title:
          "General Game Playing as a Bandit-Arms Problem: A Multiagent Monte-Carlo Solution Exploiting Nash Equilibria",
        authors: ["Brandon Mathewe Banda"],
        venue: "Oberlin College Honors Papers",
        venueNumber: "116",
        year: 2019,
        url: "https://digitalcommons.oberlin.edu/honors/116",
        repoUrl: "https://github.com/MatheweB/WiseExplorer",
        abstract:
          "An interpretable AI model for multi-agent reinforcement learning that makes robust decisions under uncertainty. The model uses Monte Carlo Tree Search that converges to Nash Equilibria, producing informed self-play data rather than random sampling. This yields fully transparent decision pathways and achieves high accuracy on chess puzzles through two-stage RL. It runs in real-time without pre-training and generalizes to any domain that can be formally defined as a game, including autonomous navigation and real-time strategy.",
        highlights: [],
      },
    ],
    interests: [
      {
        title: "Interpretable AI",
        description:
          "Designing machine learning systems whose decisions can be understood and trusted by humans. Developing transparent approaches that provide causal explanations rather than opaque predictions.",
      },
      {
        title: "Reinforcement Learning",
        description:
          "Designing RL agents that learn effectively from limited experience in complex environments. My honors thesis applied multi-agent RL with game-theoretic principles to general game playing, focusing on informed exploration over exhaustive search.",
      },
      {
        title: "Constraint-Based Mathematical Modeling",
        description:
          "Using linear optimization and constraint satisfaction to solve problems with structure, from mathematical art to resource allocation. I'm drawn to approaches where the constraints themselves encode meaning.",
      },
    ],
    futureDirections: [
      "Formalizing data-efficient reinforcement learning in domains with intractable decision spaces. Rather than simulating every possibility, I want to develop methods that identify which regions of a search space are worth exploring, using interpretable reasoning to guide and explain that process.",
    ],
  },

  cv: {
    research: [
      {
        organization: "Oberlin College",
        role: "Honors Thesis Researcher",
        location: "Oberlin, OH",
        startDate: "2018",
        endDate: "2019",
        type: "research",
        highlights: [
          "Designed a novel interpretable model for multi-agent reinforcement learning in general game playing",
          "Applied Monte Carlo methods and Nash Equilibria to achieve real-time inference without pre-training",
        ],
      },
      {
        organization: "Oberlin College",
        role: "Independent Researcher, Professor Robert Bosch",
        location: "Oberlin, OH",
        startDate: "2017",
        endDate: "2019",
        type: "research",
        highlights: [
          "Developed integer linear programming models that generate digital artwork from mathematical constraints. Every pixel in the output is determined by an optimization solver",
        ],
      },
      {
        organization: "Oberlin College",
        role: "Independent Researcher, Professor David W. Orr",
        location: "Oberlin, OH",
        startDate: "2016",
        endDate: "2016",
        type: "research",
        highlights: [
          "Designed proposals for piezoelectric energy harvesting systems on campus, evaluating feasibility and expected output across candidate sites",
        ],
      },
    ],
    experience: [
      {
        organization: "Google",
        role: "Software Engineer (L4)",
        location: "San Francisco, CA",
        startDate: "Apr 2022",
        endDate: "Jul 2024",
        type: "work",
        highlights: [
          "Led a research agenda on how LLMs can automate developer workflows in open-source codebases. Scoped the problem space, designed experiments, and developed a prompting framework for automated test generation across AOSP and ChromeOS",
          "Designed language-agnostic code-graph representations using Kythe to construct structured C++/Java training datasets from large-scale open-source codebases",
          "Collaborated with DeepMind and CoreML teams to define data specifications and quality criteria for training Google's internal models on open-source code",
          "Developed an unsupervised root-cause diagnosis method for Android using density-based clustering on T5X embeddings to group infrastructure errors by underlying cause",
        ],
      },
      {
        organization: "Google",
        role: "Software Engineer (L3)",
        location: "Mountain View, CA",
        startDate: "Apr 2020",
        endDate: "Apr 2022",
        type: "work",
        highlights: [
          "Designed API correctness verification for Android Mainline. Defined coverage criteria and developed infrastructure that enabled continuous releases across 800+ million devices and 5 platforms",
        ],
      },
      {
        organization: "Google",
        role: "Engineering Resident",
        location: "Mountain View, CA",
        startDate: "Sep 2019",
        endDate: "Apr 2020",
        type: "work",
        highlights: [
          "Investigated and optimized Android smart-sync performance. Identified bottlenecks and reduced project sync times by up to 99%",
          "Developed a photomosaic generation algorithm that reconstructs source images by matching and tiling thousands of database images",
        ],
      },
    ],
    education: [
      {
        organization: "Oberlin College",
        role: "B.A. Computer Science with High Honors, Minor in Mathematics",
        location: "Oberlin, OH",
        startDate: "2015",
        endDate: "2019",
        type: "education",
        highlights: [
          "Major GPA: 3.86",
          "Graduated with High Honors",
        ],
      },
    ],
    teaching: [
      {
        organization: "Google",
        role: "Engineering Mentor",
        location: "Mountain View, CA",
        startDate: "2021",
        endDate: "2024",
        type: "teaching",
        highlights: [
          "Mentored 12+ early-career engineers through Google's Engineering Residency and Early Career Immersion programs",
          "Guided project scoping, design decisions, and code reviews to accelerate onboarding and independent contribution",
        ],
      },
      {
        organization: "Oberlin College",
        role: "Computer Science Lab Assistant",
        location: "Oberlin, OH",
        startDate: "2016",
        endDate: "2018",
        type: "teaching",
        highlights: [
          "Guided introductory CS students through lab exercises and debugging, reinforcing core programming concepts",
          "Graded labs and provided detailed feedback to support student learning",
        ],
      },
    ],
    skills: [
      {
        category: "Languages",
        items: ["Python", "Java", "C", "C++", "Go", "SQL", "Swift", "Kotlin", "Bash"],
      },
      {
        category: "Libraries & Frameworks",
        items: ["PyTorch", "NumPy", "Jupyter", "LangChain", "RStudio", "Mathematica", "GCP", "Linux"],
      },
      {
        category: "Research & AI",
        items: [
          "AI/ML",
          "LLM Development",
          "Retrieval Augmented Generation",
          "Data Analysis & Visualization",
          "Linear Optimization",
        ],
      },
      {
        category: "Systems",
        items: [
          "Distributed Systems",
          "Asynchronous Programming",
          "Cryptography",
        ],
      },
    ],
    volunteer: [
      {
        organization: "Georgetown University Hospital",
        role: "Human Leukocyte Antigen Lab Assistant",
        location: "Washington, DC",
        startDate: "May 2016",
        endDate: "Aug 2016",
        type: "volunteer",
        highlights: [
          "Gained hands-on medical experience in organ donation compatibility testing, processing 50+ protein samples daily",
        ],
      },
      {
        organization: "Smithsonian Institution",
        role: "Documentary Film Assistant",
        location: "Washington, DC",
        startDate: "Jun 2015",
        endDate: "Jul 2015",
        type: "volunteer",
        highlights: [
          "Assisted filmmakers in interviewing participants and documenting the Smithsonian Peruvian Folk-Like Festival through film and photography",
        ],
      },
    ],
  },

  art: {
    intro:
      "Open-source research implementations and libraries.",
    projects: [
      {
        title: "WiseExplorer",
        description:
          "A modern re-implementation of my honors thesis on multi-agent reinforcement learning in General Game Playing. Uses dual-phase MCTS that deliberately explores both promising and unpromising paths, with new concepts like statistical anchoring and probability distribution sampling that I developed independently since 2019. Requires zero prior knowledge and works with any N-player game.",
        repoUrl: "https://github.com/MatheweB/WiseExplorer",
      },
      {
        title: "PyFreeform",
        description:
          "A Python library for turning images into art. Place dots, lines, curves, polygons, and text on a grid of cells sized relative to an input image, then export to SVG at any resolution. Built on my constraint-based math modeling research with Professor Bosch. See the results at madebymath.art.",
        repoUrl: "https://github.com/MatheweB/PyFreeform",
        url: "https://madebymath.art",
      },
    ],
  },

  footer: {
    copyright: "2026 Mathewe Banda",
  },
};
