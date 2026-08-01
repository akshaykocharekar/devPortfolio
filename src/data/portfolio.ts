
export const profile = {
  name: "Akshay Kocharekar",
  role: "DevOps & Full-Stack Developer",
  metaLine: "DevOps | Full-stack developer · Goa",
  motto: "",
  hook: "I build from zero and keep it live.",
  location: "Margao, Goa, India",
  email: "akshaykocharekar20@gmail.com",
  phone: "+91 9119455139",
  github: "https://github.com/akshaykocharekar",
  linkedin: "https://www.linkedin.com/",
  tagline:
    "I ship applications and the infrastructure that runs them — AWS, Docker, Linux and clean, component-driven frontends.",
  summary:
    "Full-stack developer building a foundation in DevOps and cloud infrastructure, with hands-on experience deploying and securing applications on AWS EC2, containerizing services with Docker, and automating server tasks through Bash scripting on Linux.",
  summary2:
    "I'm comfortable across the deployment pipeline: version control, environment configuration, monitoring and troubleshooting. Currently deepening Kubernetes and Terraform to move further into infrastructure automation and CI/CD, and looking for a DevOps Intern role where I can contribute to a product engineering team.",
} as const;

export const stats = [
  { value: "3", label: "Shipped projects" },
  { value: "AWS", label: "EC2 deployments" },
  { value: "BCA", label: "2023 – 2026" },
] as const;

export const skillGroups = [
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    items: [
      "AWS EC2",
      "Docker",
      "Docker Compose",
      "Linux (Ubuntu)",
      "Shell / Bash",
      "Git & GitHub",
      "Nginx",
      "CI/CD fundamentals",
      "SSH & server admin",
    ],
  },
  {
    title: "Backend & Data",
    icon: "server",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "MongoDB Atlas"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Languages",
    icon: "code",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Bash"],
  },
] as const;

export const learning = ["Kubernetes", "Terraform (IaC)"] as const;

export const experience = [
  {
    title: "Cloud Deployment & Containerization",
    org: "Self-Directed · Personal Projects",
    period: "2026 – Present",
    points: [
      "Deployed and secured Node.js/Express applications on AWS EC2 (Ubuntu), configuring SSH access and security groups/networking.",
      "Built Docker images for Node.js applications and managed multi-container setups with Docker Compose.",
      "Worked extensively in the Linux terminal for package management, file permissions, process monitoring and server administration.",
      "Wrote Bash scripts to automate system health checks and log management, applying Git branching workflows across dev and production.",
      "Applied CI/CD and cloud fundamentals (compute, networking, security groups); building hands-on familiarity with Kubernetes and Terraform.",
      "Troubleshot deployment issues spanning application code, Docker, networking and Linux environments.",
    ],
  },
] as const;

export const projects = [
  {
    name: "EasyCommute",
    subtitle: "Real-Time Bus Tracking Platform",
    description:
      "Full-stack platform with commuter, driver and admin dashboards, role-based authentication and live GPS updates over Socket.io, backed by MongoDB for persistence.",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/akshaykocharekar",
    demo: "https://easy-commute-one.vercel.app/",
    featured: true,
    image: "easycommute",
  },
  {
    name: "Server Performance Stats",
    subtitle: "Linux health reporting CLI",
    description:
      "Dependency-free Bash script that generates real-time server health reports for CPU, memory and disk, surfacing the top 5 resource-consuming processes for fast diagnostics.",
    tech: ["Bash", "Linux"],
    github: "https://github.com/akshaykocharekar",
    demo: null,
    featured: false,
    image: "server",
  },
  {
    name: "Log Archive Tool",
    subtitle: "Automated log rotation",
    description:
      "Bash automation that compresses target directories into timestamped .tar.gz archives with input validation, permission handling and structured run logging for cron use.",
    tech: ["Bash", "Linux", "cron"],
    github: "https://github.com/akshaykocharekar",
    demo: null,
    featured: false,
    image: "logs",
  },
] as const;

export const education = [
  {
    school: "VVM's Shree Damodar College of Commerce & Economics",
    degree: "Bachelor of Computer Applications (BCA)",
    place: "Margao, Goa",
    period: "2023 – 2026",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
