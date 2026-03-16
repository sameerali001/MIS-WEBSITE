export type CourseCategory = {
  id: string;
  name: string;
  icon: string;
  accent: string;
};

export type Course = {
  id: string;
  slug: string;
  code: string;
  title: string;
  category: string;
  categoryLabel: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  mode: string;
  price: string;
  heroImage: string;
  shortDescription: string;
  overview: string;
  cohort: string;
  certification: string;
  outcomes: string[];
  syllabus: string[];
  projects: string[];
  tools: string[];
  mentorNote: string;
  instructors: Array<{
    name: string;
    role: string;
    experience: string;
  }>;
  stats: {
    rating: number;
    reviews: number;
    learners: string;
    sessions: string;
    placementSupport: string;
  };
  learnerAccess: {
    title: string;
    summary: string;
    roadmap: string[];
    deliverables: string[];
    support: string[];
  };
};

export const courseCategories: CourseCategory[] = [
  { id: "all", name: "All Tracks", icon: "01", accent: "from-sky-500 to-cyan-400" },
  { id: "cloud", name: "Cloud", icon: "02", accent: "from-blue-600 to-sky-500" },
  { id: "cybersecurity", name: "Security", icon: "03", accent: "from-emerald-600 to-teal-500" },
  { id: "ai", name: "AI & ML", icon: "04", accent: "from-amber-500 to-orange-500" },
  { id: "web", name: "Web", icon: "05", accent: "from-fuchsia-600 to-rose-500" },
  { id: "network", name: "Networking", icon: "06", accent: "from-violet-600 to-indigo-500" },
  { id: "devops", name: "DevOps", icon: "07", accent: "from-slate-800 to-slate-600" },
  { id: "master", name: "Master", icon: "08", accent: "from-indigo-700 to-blue-600" },
  { id: "basic", name: "Skill Development", icon: "09", accent: "from-emerald-700 to-lime-500" },
  { id: "flagship", name: "Flagship", icon: "10", accent: "from-rose-600 to-fuchsia-600" },
  { id: "certification", name: "Certification", icon: "11", accent: "from-cyan-600 to-blue-500" },
  { id: "blockchain", name: "Blockchain", icon: "12", accent: "from-slate-700 to-zinc-500" },
];

const coreCourses: Course[] = [
  {
    id: "1",
    slug: "aws-solutions-architect-associate",
    code: "MC-101",
    title: "AWS Solutions Architect Associate",
    category: "cloud",
    categoryLabel: "Cloud Computing",
    duration: "6 Weeks",
    level: "Intermediate",
    mode: "Online + Offline",
    price: "INR 15,000",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Design secure, scalable AWS systems and prepare for the SAA certification with live architecture labs.",
    overview: "This track is built for engineers who need real AWS decision-making skills, not only exam notes. You will work through landing zones, IAM, compute design, storage strategy, VPC patterns, and cost-aware scaling using guided labs and mentor feedback.",
    cohort: "Weekend live cohort with architecture review every Sunday",
    certification: "AWS Solutions Architect Associate",
    outcomes: [
      "Design resilient multi-tier AWS architectures",
      "Build secure IAM and networking foundations",
      "Choose the right compute, storage, and database mix",
      "Prepare with exam-style design challenges"
    ],
    syllabus: [
      "AWS core services and architecture patterns",
      "IAM, KMS, guardrails, and account design",
      "VPC, subnets, routing, load balancers, and DNS",
      "EC2, Lambda, ECS, and scaling decisions",
      "S3, EBS, EFS, Glacier, and backup design",
      "RDS, DynamoDB, caching, and monitoring"
    ],
    projects: [
      "Highly available ecommerce architecture",
      "Serverless event-processing pipeline",
      "Cost optimization review for a production workload"
    ],
    tools: ["AWS Console", "IAM", "CloudWatch", "Lambda", "RDS", "Terraform basics"],
    mentorNote: "Ideal for system admins and developers moving into cloud architecture roles.",
    instructors: [
      { name: "Arjun Menon", role: "Principal Cloud Architect", experience: "10+ years" },
      { name: "Sneha Kapoor", role: "AWS Migration Lead", experience: "8+ years" }
    ],
    stats: {
      rating: 4.8,
      reviews: 245,
      learners: "3,800+",
      sessions: "1,040+",
      placementSupport: "Mock interviews + resume review"
    },
    learnerAccess: {
      title: "AWS Launch Kit",
      summary: "Your enrolled dashboard focuses on the first two weeks, the lab checklist, and the prep sequence for certification.",
      roadmap: [
        "Week 1: Core AWS map and architecture vocabulary",
        "Week 2: Identity, networking, and cost guardrails",
        "Week 3-4: Compute, scaling, and database tradeoffs",
        "Week 5-6: Case studies, revision, and mock assessment"
      ],
      deliverables: [
        "Architecture workbook",
        "AWS lab access sheet",
        "Certification prep tracker"
      ],
      support: [
        "Dedicated mentor doubt slot twice a week",
        "Placement guidance after project review",
        "Recording access for missed sessions"
      ]
    }
  },
  {
    id: "2",
    slug: "certified-ethical-hacker",
    code: "CS-201",
    title: "Certified Ethical Hacker (CEH)",
    category: "cybersecurity",
    categoryLabel: "Cyber Security",
    duration: "8 Weeks",
    level: "Advanced",
    mode: "Online",
    price: "INR 25,000",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Train on modern attack paths, defensive validation, and CEH-aligned labs with guided penetration testing practice.",
    overview: "This program blends CEH preparation with hands-on adversarial thinking. Learners practice reconnaissance, exploitation logic, web testing, and reporting discipline while understanding legal, ethical, and defensive implications.",
    cohort: "Evening cohort for working professionals with live lab support",
    certification: "EC-Council CEH aligned preparation",
    outcomes: [
      "Run structured reconnaissance and vulnerability discovery",
      "Document findings like a security consultant",
      "Use offensive tools responsibly in lab environments",
      "Prepare for CEH with guided mocks"
    ],
    syllabus: [
      "Reconnaissance and threat modeling",
      "Scanning, enumeration, and foothold analysis",
      "Web application testing fundamentals",
      "Authentication, privilege escalation, and persistence concepts",
      "Cloud and wireless security basics",
      "Reporting, remediation mapping, and exam preparation"
    ],
    projects: [
      "Attack surface review for a demo company",
      "Web app security assessment",
      "Executive vulnerability report presentation"
    ],
    tools: ["Nmap", "Burp Suite", "OWASP ZAP", "Wireshark", "Metasploit"],
    mentorNote: "Best for learners who already understand networking basics and want security depth.",
    instructors: [
      { name: "Maya Fernandes", role: "Red Team Consultant", experience: "12+ years" },
      { name: "Karan Gupta", role: "Application Security Lead", experience: "9+ years" }
    ],
    stats: {
      rating: 4.9,
      reviews: 312,
      learners: "2,900+",
      sessions: "890+",
      placementSupport: "Security profile review + interview drills"
    },
    learnerAccess: {
      title: "Security Ops Starter Room",
      summary: "After enrollment, learners get the staged plan for labs, reporting templates, and mentor checkpoints.",
      roadmap: [
        "Week 1-2: Recon, scanning, and lab safety",
        "Week 3-4: Web, auth, and exploitation workflow",
        "Week 5-6: Network, wireless, and cloud cases",
        "Week 7-8: Reporting pack and CEH revision"
      ],
      deliverables: [
        "Lab environment checklist",
        "Security reporting template",
        "Exam revision calendar"
      ],
      support: [
        "Live doubt-clearing on alternate days",
        "Mentor feedback on two reports",
        "Interview prep for SOC and pentest roles"
      ]
    }
  },
  {
    id: "3",
    slug: "machine-learning-with-python",
    code: "AI-301",
    title: "Machine Learning with Python",
    category: "ai",
    categoryLabel: "AI & ML",
    duration: "10 Weeks",
    level: "Intermediate",
    mode: "Offline",
    price: "INR 20,000",
    heroImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Move from Python fundamentals to production-minded ML workflows with projects, model evaluation, and deployment thinking.",
    overview: "The program is designed for learners who need practical ML fluency. You will clean data, engineer features, compare models, explain results, and package work in portfolio-ready notebooks and mini products.",
    cohort: "Offline guided lab cohort with in-class code reviews",
    certification: "MIS Machine Learning Certificate",
    outcomes: [
      "Prepare and transform real-world datasets",
      "Train supervised and unsupervised models",
      "Evaluate models with business-relevant metrics",
      "Package ML work into portfolio-ready case studies"
    ],
    syllabus: [
      "Python for data workflows",
      "Pandas, NumPy, and visualization",
      "Regression and classification",
      "Clustering and recommendation basics",
      "Feature engineering and model tuning",
      "Project packaging and deployment foundations"
    ],
    projects: [
      "Customer churn prediction",
      "Recommendation mini-engine",
      "Demand forecasting dashboard"
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter", "Matplotlib"],
    mentorNote: "A strong fit for analysts, developers, and anyone starting an AI-focused portfolio.",
    instructors: [
      { name: "Dr. Rhea Soni", role: "ML Consultant", experience: "11+ years" },
      { name: "Ishaan Verma", role: "Data Scientist", experience: "7+ years" }
    ],
    stats: {
      rating: 4.7,
      reviews: 198,
      learners: "2,200+",
      sessions: "760+",
      placementSupport: "Portfolio reviews + case-study coaching"
    },
    learnerAccess: {
      title: "ML Sprint Board",
      summary: "The enrolled page outlines your project progression, practice tasks, and review milestones.",
      roadmap: [
        "Week 1-2: Python data stack and notebook workflow",
        "Week 3-4: Supervised models and error analysis",
        "Week 5-6: Clustering, tuning, and feature work",
        "Week 7-10: Portfolio projects and mentor demo day"
      ],
      deliverables: [
        "Starter notebook bundle",
        "Dataset practice pack",
        "Portfolio project review sheet"
      ],
      support: [
        "In-class debugging support",
        "Weekly project critique",
        "Placement prep for data roles"
      ]
    }
  },
  {
    id: "4",
    slug: "full-stack-web-development",
    code: "WD-102",
    title: "Full Stack Web Development",
    category: "web",
    categoryLabel: "Web Development",
    duration: "12 Weeks",
    level: "Beginner",
    mode: "Online",
    price: "INR 18,000",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Build complete products across UI, API, database, and deployment with a portfolio-first curriculum.",
    overview: "This course is structured like a product studio. Learners design interfaces, build APIs, connect databases, and ship polished features with code reviews that emphasize readability and real team habits.",
    cohort: "Beginner-friendly online cohort with weekly build sprints",
    certification: "MIS Full Stack Developer Certificate",
    outcomes: [
      "Create responsive interfaces with modern React patterns",
      "Build APIs and persist data reliably",
      "Understand routing, auth, and deployment basics",
      "Ship portfolio projects with production-style polish"
    ],
    syllabus: [
      "HTML, CSS, JavaScript fundamentals",
      "React and component architecture",
      "Next.js routing and data handling",
      "API design and backend basics",
      "Database integration and authentication",
      "Testing, deployment, and portfolio packaging"
    ],
    projects: [
      "Student portal app",
      "Booking dashboard",
      "Portfolio-grade capstone product"
    ],
    tools: ["React", "Next.js", "Node.js", "MongoDB", "Git", "Vercel"],
    mentorNote: "Designed for freshers who want one coherent path from basics to employable projects.",
    instructors: [
      { name: "Nidhi Batra", role: "Frontend Architect", experience: "9+ years" },
      { name: "Farhan Ali", role: "Full Stack Engineer", experience: "8+ years" }
    ],
    stats: {
      rating: 4.8,
      reviews: 276,
      learners: "4,100+",
      sessions: "1,230+",
      placementSupport: "GitHub review + mock frontend rounds"
    },
    learnerAccess: {
      title: "Builder Access Deck",
      summary: "After enrollment you unlock the sprint plan, capstone expectations, and onboarding checklist.",
      roadmap: [
        "Week 1-3: Web foundations and UI builds",
        "Week 4-6: React patterns and state handling",
        "Week 7-9: APIs, auth, and persistence",
        "Week 10-12: Capstone, polish, and interview prep"
      ],
      deliverables: [
        "Sprint checklist",
        "Capstone rubric",
        "Resume bullet writing guide"
      ],
      support: [
        "Weekly portfolio reviews",
        "Code review commentary from mentors",
        "Interview preparation focused on project discussion"
      ]
    }
  },
  {
    id: "5",
    slug: "cisco-ccna-routing-switching",
    code: "NET-150",
    title: "Cisco CCNA Routing & Switching",
    category: "network",
    categoryLabel: "Networking",
    duration: "8 Weeks",
    level: "Intermediate",
    mode: "Offline",
    price: "INR 17,500",
    heroImage: "https://images.unsplash.com/photo-1563770660941-10a63607692e?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Strengthen routing, switching, subnetting, and network troubleshooting with practical device-focused sessions.",
    overview: "Learners move from network fundamentals into router and switch configuration with enough repetition to build confidence for support, infrastructure, and certification roles. Every module is supported by lab scenarios and troubleshooting drills.",
    cohort: "Offline network lab batch with physical and simulator practice",
    certification: "CCNA aligned preparation",
    outcomes: [
      "Configure core routing and switching concepts",
      "Troubleshoot common enterprise network issues",
      "Understand subnetting and design logic clearly",
      "Prepare for CCNA-oriented practical assessments"
    ],
    syllabus: [
      "OSI model and network fundamentals",
      "Subnetting and IP addressing practice",
      "Switching, VLANs, and spanning tree",
      "Static and dynamic routing",
      "ACLs, NAT, and basic security",
      "Troubleshooting methodology and exam prep"
    ],
    projects: [
      "Campus network design",
      "Branch routing simulation",
      "Fault isolation lab challenge"
    ],
    tools: ["Cisco Packet Tracer", "Wireshark", "CLI configuration", "Subnetting drills"],
    mentorNote: "Strong foundation program for support engineers and infrastructure beginners.",
    instructors: [
      { name: "Rohit Jain", role: "Network Infrastructure Lead", experience: "13+ years" },
      { name: "Pooja Malik", role: "Enterprise Network Engineer", experience: "7+ years" }
    ],
    stats: {
      rating: 4.6,
      reviews: 183,
      learners: "1,900+",
      sessions: "640+",
      placementSupport: "Lab interview drills + technical screening prep"
    },
    learnerAccess: {
      title: "Network Lab Access Pack",
      summary: "The locked learner page becomes your week-by-week lab map once enrollment is complete.",
      roadmap: [
        "Week 1-2: Addressing, subnetting, and switching",
        "Week 3-4: Routing protocols and design basics",
        "Week 5-6: ACL, NAT, and troubleshooting drills",
        "Week 7-8: Revision labs and exam-oriented practice"
      ],
      deliverables: [
        "Lab topology sheets",
        "CLI practice commands",
        "Assessment checkpoint tracker"
      ],
      support: [
        "In-lab mentor supervision",
        "Extra subnetting drills",
        "Interview preparation for network support roles"
      ]
    }
  },
  {
    id: "6",
    slug: "docker-kubernetes-mastery",
    code: "DO-201",
    title: "Docker & Kubernetes Mastery",
    category: "devops",
    categoryLabel: "DevOps",
    duration: "6 Weeks",
    level: "Advanced",
    mode: "Online + Offline",
    price: "INR 22,000",
    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Master containers, orchestration, deployment pipelines, and production-ready release practices.",
    overview: "This is an execution-heavy DevOps course focused on turning application code into reliable releases. You will containerize services, design Kubernetes deployments, manage configs, observe workloads, and understand delivery pipelines in a practical way.",
    cohort: "Hybrid cohort with guided cluster labs and deployment walkthroughs",
    certification: "MIS DevOps Deployment Certificate",
    outcomes: [
      "Containerize multi-service applications",
      "Deploy and manage workloads in Kubernetes",
      "Handle configs, secrets, and rollouts safely",
      "Explain delivery flow with DevOps language employers expect"
    ],
    syllabus: [
      "Docker fundamentals and image strategy",
      "Compose and local environment design",
      "Kubernetes core resources and workloads",
      "Service discovery, ingress, and secrets",
      "Observability, rollout strategy, and failure handling",
      "CI/CD concepts and release management"
    ],
    projects: [
      "Containerized ecommerce stack",
      "Kubernetes release workflow",
      "Blue-green deployment simulation"
    ],
    tools: ["Docker", "Kubernetes", "Helm basics", "GitHub Actions", "Prometheus basics"],
    mentorNote: "A strong choice for developers and ops engineers transitioning into deployment ownership.",
    instructors: [
      { name: "Vikram Das", role: "Platform Engineer", experience: "10+ years" },
      { name: "Tanvi Arora", role: "DevOps Coach", experience: "8+ years" }
    ],
    stats: {
      rating: 4.8,
      reviews: 221,
      learners: "2,500+",
      sessions: "710+",
      placementSupport: "Project narrative coaching + mock DevOps interviews"
    },
    learnerAccess: {
      title: "Release Readiness Hub",
      summary: "Enrolled learners unlock the rollout plan, environment checklist, and cluster practice sequence.",
      roadmap: [
        "Week 1: Docker images, layers, and local workflows",
        "Week 2-3: Kubernetes resources and deployment patterns",
        "Week 4: Config, secrets, and traffic management",
        "Week 5-6: Observability, CI/CD, and release simulation"
      ],
      deliverables: [
        "Deployment runbook template",
        "Cluster cheat sheet",
        "Capstone rollout checklist"
      ],
      support: [
        "Mentor-led deployment reviews",
        "Recorded lab walkthroughs",
        "Interview prep for DevOps and SRE roles"
      ]
    }
  }
];

type CourseSeed = {
  id: string;
  code: string;
  title: string;
  slug: string;
  category: Course["category"];
  categoryLabel: string;
  duration: string;
  level: Course["level"];
  mode: string;
  price: string;
  heroImage: string;
};

function createCourse(seed: CourseSeed): Course {
  return {
    ...seed,
    shortDescription: `${seed.title} program with practical delivery, mentor support, and career-focused outcomes.`,
    overview: `${seed.title} is designed for learners who want guided training and job-relevant execution in ${seed.categoryLabel.toLowerCase()}. This track combines live instruction, structured practice, and milestone-based progression.`,
    cohort: `${seed.mode} guided batch with mentor checkpoints`,
    certification: `${seed.title} completion certificate`,
    outcomes: [
      `Understand core concepts in ${seed.categoryLabel}`,
      "Build practical project experience",
      "Prepare with interview-oriented guidance",
      "Follow a structured roadmap from basics to execution"
    ],
    syllabus: [
      "Foundation concepts and tools",
      "Hands-on labs and guided tasks",
      "Project implementation workflow",
      "Review, optimization, and best practices",
      "Career readiness and interview preparation"
    ],
    projects: [
      "Mini practical assignment",
      "Industry-style guided project",
      "Portfolio-ready final project"
    ],
    tools: ["Industry tools", "Mentor worksheets", "Practice labs", "Project templates"],
    mentorNote: "Recommended for learners who want structured progression with regular mentor guidance.",
    instructors: [
      { name: "Aman Khanna", role: `${seed.categoryLabel} Mentor`, experience: "8+ years" },
      { name: "Priya Mehta", role: "Career Coach", experience: "7+ years" }
    ],
    stats: {
      rating: 4.7,
      reviews: 180,
      learners: "2,000+",
      sessions: "600+",
      placementSupport: "Resume review + mock interviews"
    },
    learnerAccess: {
      title: `${seed.title} Learner Brief`,
      summary: "After enrollment, this page unlocks your course roadmap, project checkpoints, and support resources.",
      roadmap: [
        "Onboarding and baseline assessment",
        "Core module execution",
        "Project sprint and mentor review",
        "Final assessment and placement prep"
      ],
      deliverables: [
        "Learning roadmap",
        "Project checklist",
        "Interview preparation notes"
      ],
      support: [
        "Weekly mentor doubt sessions",
        "Project feedback loops",
        "Placement assistance guidance"
      ]
    }
  };
}

const additionalCourses: Course[] = [
  createCourse({
    id: "7",
    code: "BC-101",
    title: "Blockchain Development Fundamentals",
    slug: "blockchain-development-fundamentals",
    category: "blockchain",
    categoryLabel: "Blockchain",
    duration: "8 Weeks",
    level: "Intermediate",
    mode: "Online",
    price: "INR 16,000",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "8",
    code: "MC-102",
    title: "Microsoft Azure Fundamentals",
    slug: "microsoft-azure-fundamentals",
    category: "cloud",
    categoryLabel: "Cloud Computing",
    duration: "4 Weeks",
    level: "Beginner",
    mode: "Online",
    price: "INR 12,000",
    heroImage: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "9",
    code: "CS-202",
    title: "Network Security Essentials",
    slug: "network-security-essentials",
    category: "cybersecurity",
    categoryLabel: "Cyber Security",
    duration: "6 Weeks",
    level: "Beginner",
    mode: "Offline",
    price: "INR 14,000",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "10",
    code: "AI-302",
    title: "Deep Learning with TensorFlow",
    slug: "deep-learning-with-tensorflow",
    category: "ai",
    categoryLabel: "AI & ML",
    duration: "10 Weeks",
    level: "Advanced",
    mode: "Online + Offline",
    price: "INR 24,000",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "11",
    code: "WD-103",
    title: "React.js Advanced",
    slug: "react-js-advanced",
    category: "web",
    categoryLabel: "Web Development",
    duration: "8 Weeks",
    level: "Intermediate",
    mode: "Online",
    price: "INR 17,000",
    heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "12",
    code: "NET-151",
    title: "Network Administration Pro",
    slug: "network-administration-pro",
    category: "network",
    categoryLabel: "Networking",
    duration: "10 Weeks",
    level: "Advanced",
    mode: "Offline",
    price: "INR 19,000",
    heroImage: "https://images.unsplash.com/photo-1551703599-6b3e8379f6f5?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "13",
    code: "MST-101",
    title: "Master Certified Cloud Computing & Cyber Security Engineer",
    slug: "master-certified-cloud-computing-and-cyber-security-engineer",
    category: "master",
    categoryLabel: "Master Program",
    duration: "18 Months",
    level: "Advanced",
    mode: "Offline + Hybrid",
    price: "INR 95,000",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "14",
    code: "MST-102",
    title: "Master Certified Cloud Computing Professional with Artificial Intelligence",
    slug: "master-certified-cloud-computing-professional-with-artificial-intelligence",
    category: "master",
    categoryLabel: "Master Program",
    duration: "6 Months",
    level: "Advanced",
    mode: "Offline + Hybrid",
    price: "INR 68,000",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "15",
    code: "MST-103",
    title: "Master Certified Cloud Computing & Cyber Security Professional",
    slug: "master-certified-cloud-computing-and-cyber-security-professional",
    category: "master",
    categoryLabel: "Master Program",
    duration: "18 Months",
    level: "Advanced",
    mode: "Offline + Hybrid",
    price: "INR 98,000",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "16",
    code: "MST-104",
    title: "Master In Gaming & Metaverse Design",
    slug: "master-in-gaming-and-metaverse-design",
    category: "master",
    categoryLabel: "Master Program",
    duration: "26 Months",
    level: "Advanced",
    mode: "Offline",
    price: "INR 1,15,000",
    heroImage: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "17",
    code: "BSC-101",
    title: "FULL STACK DEVELOPMENT WITH AI INTEGRATION",
    slug: "full-stack-development-with-ai-integration",
    category: "basic",
    categoryLabel: "Skill Development",
    duration: "12/6 Months",
    level: "Beginner",
    mode: "Online + Offline",
    price: "INR 35,000",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "18",
    code: "BSC-102",
    title: "Video Editing Fundamentals",
    slug: "video-editing-fundamentals",
    category: "basic",
    categoryLabel: "Skill Development",
    duration: "2 Months",
    level: "Beginner",
    mode: "Online + Offline",
    price: "INR 10,000",
    heroImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "19",
    code: "BSC-103",
    title: "Digital Marketing Essentials",
    slug: "digital-marketing-essentials",
    category: "basic",
    categoryLabel: "Skill Development",
    duration: "3 Months",
    level: "Beginner",
    mode: "Online + Offline",
    price: "INR 12,000",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "20",
    code: "FLG-101",
    title: "Advanced Web Development Masterclass",
    slug: "advanced-web-development-masterclass",
    category: "flagship",
    categoryLabel: "Flagship Program",
    duration: "12 Months",
    level: "Advanced",
    mode: "Online + Offline",
    price: "INR 64,000",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "21",
    code: "FLG-102",
    title: "AI & Machine Learning Intensive",
    slug: "ai-and-machine-learning-intensive",
    category: "flagship",
    categoryLabel: "Flagship Program",
    duration: "10 Months",
    level: "Advanced",
    mode: "Online + Offline",
    price: "INR 70,000",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "22",
    code: "FLG-103",
    title: "Cybersecurity & Network Mastery",
    slug: "cybersecurity-and-network-mastery",
    category: "flagship",
    categoryLabel: "Flagship Program",
    duration: "14 Months",
    level: "Advanced",
    mode: "Offline + Hybrid",
    price: "INR 78,000",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "23",
    code: "FLG-104",
    title: "Cloud Architecture & DevOps",
    slug: "cloud-architecture-and-devops",
    category: "flagship",
    categoryLabel: "Flagship Program",
    duration: "9 Months",
    level: "Advanced",
    mode: "Online + Offline",
    price: "INR 66,000",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "24",
    code: "CRT-101",
    title: "AWS Solutions Architect Certification",
    slug: "aws-solutions-architect-certification",
    category: "certification",
    categoryLabel: "Certification",
    duration: "3 Months",
    level: "Intermediate",
    mode: "Online",
    price: "INR 22,000",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "25",
    code: "CRT-102",
    title: "Google Cloud Professional Certification",
    slug: "google-cloud-professional-certification",
    category: "certification",
    categoryLabel: "Certification",
    duration: "3 Months",
    level: "Intermediate",
    mode: "Online",
    price: "INR 22,000",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "26",
    code: "CRT-103",
    title: "Microsoft Azure Administrator Certification",
    slug: "microsoft-azure-administrator-certification",
    category: "certification",
    categoryLabel: "Certification",
    duration: "2 Months",
    level: "Intermediate",
    mode: "Online",
    price: "INR 20,000",
    heroImage: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "27",
    code: "DEG-101",
    title: "BCA In Cloud Computing & Cyber Security",
    slug: "bca-cloud-cyber-security",
    category: "master",
    categoryLabel: "Degree Program",
    duration: "36 Months",
    level: "Advanced",
    mode: "Offline + Hybrid",
    price: "INR 2,40,000",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "28",
    code: "DEG-102",
    title: "BCA In Multimedia and Animation",
    slug: "bca-multimedia-animation",
    category: "master",
    categoryLabel: "Degree Program",
    duration: "36 Months",
    level: "Intermediate",
    mode: "Offline + Hybrid",
    price: "INR 2,10,000",
    heroImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop"
  }),
  createCourse({
    id: "29",
    code: "DEG-103",
    title: "BCA In Data Science with AI",
    slug: "bca-data-science-ai",
    category: "master",
    categoryLabel: "Degree Program",
    duration: "36 Months",
    level: "Advanced",
    mode: "Offline + Hybrid",
    price: "INR 2,55,000",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop"
  })
];

export const courses: Course[] = [...coreCourses, ...additionalCourses];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getRelatedCourses(slug: string, category: string) {
  return courses.filter((course) => course.slug !== slug && course.category === category).slice(0, 3);
}