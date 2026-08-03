
export const profile = {
  name: "Akshay Kocharekar",
  role: "DevOps & Full-Stack Developer",
  metaLine: "DevOps | Full-stack · Goa",
  motto: "",
  hook: "I build from zero and keep it live.",
  location: "Margao, Goa, India",
  email: "akshaykocharekar20@gmail.com",
  phone: "+91 9119455139",
  github: "https://github.com/akshaykocharekar",
  linkedin: "www.linkedin.com/in/akshay-kocharekar-859829321",
  tagline:
    "I ship applications and the infrastructure that runs them — AWS, Docker, Linux and clean, component-driven frontends.",
  summary:
    "Full-stack developer focused on DevOps, cloud infrastructure, and automation, with hands-on experience deploying applications on AWS EC2, containerizing services with Docker, and building reliable Linux-based workflows.",
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
    icon: "monitor",
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
  title: "Cloud Infrastructure & Linux",
  org: "Self-Directed · Personal Projects",
  period: "2026 – Present",
  points: [
    "Provisioned and hardened Ubuntu Linux servers on AWS EC2 using SSH key authentication, UFW firewall, Fail2Ban, and unattended security updates.",
    "Deployed and configured Nginx to serve public web applications while managing network access with AWS Security Groups and host-level firewalls.",
    "Worked extensively in the Linux terminal for package management, process monitoring, service management (systemd), and server administration.",
    "Documented infrastructure with architecture diagrams, threat models, and deployment documentation following industry best practices.",
    "Currently expanding into Docker, Kubernetes, Terraform, and CI/CD through hands-on infrastructure projects."
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
