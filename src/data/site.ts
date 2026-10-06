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

export interface Project {
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
  projects: {
    intro: string;
    items: Project[];
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
      "Computer scientist interested in interpretable AI: program synthesis, symbolic library learning, and reinforcement learning. Also makes art with math.",
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
      "I'm a computer scientist interested in interpretable AI systems whose reasoning can be inspected, trusted, and improved by the people who use them. Most recently, I spent five years as a software engineer at Google, learning how to turn research ideas into working systems.",
      "At Google, I led a research agenda to dramatically improve open-source developer workflows using LLMs to automate unit-test creation. I designed hybrid embedding and code-coverage evaluations for our experiments, and created a graph-structured reasoning framework for automated test generation across AndroidOS. I collaborated with DeepMind and CoreML on data specifications for the first training of Google's internal models on open-source code, led the API-correctness and code-coverage infrastructure for Android Mainline (enabling continuous releases to 800+ million devices), and developed an unsupervised root-cause analysis method to uncover latent Android Infrastructure failure patterns with unlabeled data",
      "Before Google, I graduated with High Honors in Computer Science from Oberlin College, with a minor in Mathematics. My honors thesis framed general game playing as a bandit-arms problem and solved it with a two-stage multiagent Monte Carlo search, and I've continued developing that work independently since.",
      "I'm currently applying to PhD programs in computer science. My research interests are program synthesis and symbolic library learning (treating compression as learning), program-synthesized concepts for concept bottleneck models, and sample-efficient symbolic methods for intractably deep search problems.",
      "As a side-passion, I make digital art with integer programming and other optimization techniques, building on independent work with Professor Robert Bosch at Oberlin. You can find the images and the methodology behind them at madebymath.art.",
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
      "My research centers on interpretable AI: designing systems whose decisions can be understood, trusted, and improved by humans. I favor transparent, symbolic approaches over black-box models—if we can't explain why a system makes a decision, we can't truly trust it. My current work spans program synthesis and symbolic library learning, concept bottleneck models, and sample-efficient reinforcement learning for general game playing.",
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
          "An interpretable general game player that takes only the rules of a game as input, requires no pre-training, and whose reasoning is traceable to accumulated self-play statistics. Move selection is framed as a multi-armed bandit problem and solved with a two-stage multiagent Monte Carlo search: the first stage prunes losing branches and the second exploits promising ones with a UCB-style policy, converging to Nash equilibria. The player achieves perfect tic-tac-toe, reliably finds winning moves in Nim, and plays strategically in minichess.",
        highlights: [
          "Rules-only input, no pre-training, and reasoning traceable to accumulated self-play statistics",
          "Move selection framed as a multi-armed bandit, solved by a two-stage multiagent Monte Carlo search that prunes losing branches and exploits promising ones with a UCB-style policy",
          "Perfect tic-tac-toe play; reliably finds winning moves in Nim; strategic play in minichess",
        ],
      },
    ],
    interests: [
      {
        title: "Program Synthesis & Symbolic Regression",
        description:
          "Symbolic, non-neural library learning that accumulates data-efficient, reusable abstractions across domains. Minimum description length and e-graphs to induce concise generalized solutions, treating compression as learning.",
      },
      {
        title: "Concept Bottleneck Models",
        description:
          "Using program synthesis as the concept generator for concept bottleneck models in place of hand-picked or LLM-generated concepts, and testing what that changes for predictive accuracy and interpretability across problem spaces.",
      },
      {
        title: "General Game Playing & Reinforcement Learning",
        description:
          "Sample-efficient techniques that make symbolic approaches tractable for intractably deep search problems.",
      },
    ],
  },

  cv: {
    research: [
      {
        organization: "Oberlin College",
        role: "Computer Science Honors Researcher, Professor Robert Geitz",
        location: "Oberlin, OH",
        startDate: "2018",
        endDate: "2019",
        type: "research",
        highlights: [
          "Earned High Departmental Honors in Computer Science for a year-long independent research project culminating in a qualifying exam, thesis defense, and public presentation",
          "Designed a novel interpretable model for general game playing: a two-stage multiagent Monte Carlo search that converges to Nash equilibria and runs in real time without pre-training",
        ],
      },
      {
        organization: "Oberlin College",
        role: "Linear Optimization Researcher, Professor Robert Bosch",
        location: "Oberlin, OH",
        startDate: "2018",
        endDate: "2019",
        type: "research",
        highlights: [
          "Invented constraint-optimization algorithms that generate digital artworks",
          "Used acyclicity, connectivity, planarity, and two-colorability as constraints to render images as connected spanning trees, two-color convex tilings, and morphing polygon grids with flexible vertices (documented at madebymath.art)",
        ],
      },
      {
        organization: "Oberlin College",
        role: "Environmental Sustainability Research, Professor Keith Tarvin",
        location: "Oberlin, OH",
        startDate: "2017",
        endDate: "2018",
        type: "research",
        highlights: [
          "Conducted a literature review on the political, economic, and engineering challenges of piezoelectric energy as a viable renewable",
          "Proposed uses of piezoelectricity on Oberlin's campus, evaluating feasibility and expected energy output across candidate sites",
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
          "Led a research agenda to discover techniques for LLMs to dramatically improve open-source developer workflows",
          "Proposed unit-test automation as the research objective, designed evaluation frameworks (hybrid embedding + code-coverage evals) and experiments, and developed a graph-structured reasoning framework for automated test generation across AndroidOS",
          "Built structured, hierarchical datasets of Android's source code to improve one-shot performance and fine-tuning",
          "Collaborated with DeepMind and CoreML teams to define data specifications and quality criteria for training Google's internal models on open-source code—the first time these models were trained on open-source codebases",
          "Developed an unsupervised root-cause analysis method for Android OS infrastructure errors using T5X embeddings and density-based clustering, reducing incident response time by 90%",
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
          "Technical lead on API correctness and code-coverage infrastructure for Android Mainline (modularizing the Android operating system)",
          "Enabled continuous AndroidOS releases across 800+ million devices and 5 platforms",
          "Collaborated with product managers and UX designers to deliver interactive developer tools used by 200+ Google engineers",
          "Built interactive tools that let developers identify and resolve coverage gaps, reducing time-to-resolution by 95%",
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
          "Optimized Android smart-sync performance, enabling developers to sync to the latest best-known AndroidOS baseline up to 99% (one day) faster",
          "Developed a photomosaic image-generation algorithm that recreates a source image by tiling thousands of images from a database (the Met gallery database)",
        ],
      },
      {
        organization: "Optoro",
        role: "Software Engineer Intern",
        location: "Washington, DC",
        startDate: "Jun 2018",
        endDate: "Aug 2018",
        type: "internship",
        highlights: [
          "Developed the first presubmit testing infrastructure for the technology stack",
          "Designed UI features for the BULQ iOS app and web landing page",
          "Built internal front-end tools that let non-engineering teams independently update their live web content",
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
      },
    ],
    teaching: [
      {
        organization: "Google",
        role: "Engineering Mentor",
        location: "San Francisco, CA",
        startDate: "2022",
        endDate: "2024",
        type: "teaching",
        highlights: [
          "Mentored and taught 12+ early-career engineers across several teams through Google's Engineering Residency and Early Career Immersion programs",
          "Guided project scoping, design decisions, and code reviews to accelerate onboarding and independent contribution",
        ],
      },
      {
        organization: "Oberlin College",
        role: "Computer Science Lab Assistant",
        location: "Oberlin, OH",
        startDate: "2017",
        endDate: "2019",
        type: "teaching",
        highlights: [
          "Guided introductory CS students through lab exercises and debugging, reinforcing core programming concepts",
          "Graded labs and provided detailed feedback to support student learning",
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
          "Gained hands-on medical experience in organ donation compatibility testing, processing protein samples, and managing patient data",
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

  projects: {
    intro:
      "Open-source research implementations and libraries.",
    items: [
      {
        title: "WiseExplorer",
        description:
          "An updated re-implementation of my honors thesis on general game playing as a bandit-arms problem. Uses a two-stage multiagent Monte Carlo search that prunes losing branches, then exploits promising ones with a UCB-style policy. Statistical anchoring and probability distribution sampling were developed independently since 2019. Requires zero prior knowledge and works with any N-player game.",
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
