
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
    name: "Monitoring & SLO Stack",
    subtitle: "DevOps/SRE observability stack",
    description:
      "Monitoring stack demonstrating infrastructure metrics, application availability, SLOs, error budgets and burn-rate alerting, built with Docker Compose, Prometheus and Grafana.",
    tech: ["Docker Compose", "Prometheus", "Grafana", "SLOs", "Node.js"],
    github: "https://github.com/akshaykocharekar/monitoring-stack",
    demo: null,
    featured: false,
    image: "monitoring-stack",
  },
  {
    name: "CI Pipeline",
    subtitle: "Automated build, test & scan pipeline",
    description:
      "Production-inspired CI pipeline using GitHub Actions to build, test, scan and package a Node.js application before publishing it.",
    tech: ["GitHub Actions", "Node.js", "CI/CD", "Security scanning"],
    github: "https://github.com/akshaykocharekar/CI-Pipeline",
    demo: null,
    featured: false,
    image: "ci-pipeline",
  },
{
  name: "Kubernetes Zero-Downtime Deployment",
  subtitle: "Kind + Kubernetes + NGINX Ingress",
  description:
    "Multi-node Kubernetes deployment demonstrating rolling updates, readiness and liveness probes, Service and Ingress routing, slow-start and unhealthy release simulations, rollout protection, and rollback.",
  tech: [
    "Kubernetes",
    "Kind",
    "Docker",
    "NGINX Ingress",
    "Rolling Updates",
    "Readiness & Liveness Probes",
  ],
  github: "https://github.com/akshaykocharekar/k8s-zero-downtime",
  demo: null,
  featured: true,
  image: "Project1",
},
  {
    name: "Multi-Service Docker App",
    subtitle: "Containerized MERN with Redis",
    description:
      "Containerized MERN application demonstrating Docker, Docker Compose, MongoDB, Redis, container networking, volumes and multi-service orchestration.",
    tech: ["Docker Compose", "MongoDB", "Redis", "Node.js", "React"],
    github: "https://github.com/akshaykocharekar/Multi-Service-docker-app",
    demo: null,
    featured: false,
    image: "docker-multi-service",
  },
  {
    name: "EasyCommute",
    subtitle: "Real-Time Bus Tracking Platform",
    description:
      "Full-stack platform with commuter, driver and admin dashboards, role-based authentication and live GPS updates over Socket.io, backed by MongoDB for persistence.",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/akshaykocharekar/easyCommute",
    demo: "https://easy-commute-one.vercel.app/",
    featured: false,
    image: "easycommute",
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
  { label: "Docs", href: "#documentation" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;