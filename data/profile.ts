export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  file?: string;
  badge?: string;
}

export interface LearningModule {
  title: string;
  description: string;
  progress: number;
}

export interface Profile {
  name: string;
  roleLine: string;
  tagline: string;
  bio: string;
  education: {
    degree: string;
    institution: string;
    focus: string[];
  };
  experience: Experience[];
  projects: Project[];
  techStack: {
    category: string;
    skills: string[];
  }[];
  certifications: Certification[];
  currentlyLearning: LearningModule[];
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const profileData: Profile = {
  name: "Dhanush Ginkala",
  roleLine: "Deep Learning · Computer Vision · Full-Stack Development",
  tagline: "Building models, systems, and visual stories from code.",
  bio: "B.Tech CSE graduate from ICFAI Foundation for Higher Education (IFHE) with a focus on deep learning, computer vision, and full-stack development. Experienced in developing Sea Surface Temperature forecasting models at INCOIS and contributing mathematical animation systems to Skillbanc.",
  education: {
    degree: "B.Tech in Computer Science",
    institution: "ICFAI Foundation for Higher Education (IFHE)",
    focus: ["Deep Learning & Software Systems", "Computer Vision · Spatiotemporal Forecasting · Real-time Web", "Full-Stack Web Development"],
  },
  experience: [
    {
      role: "Deep Learning Intern",
      company: "INCOIS",
      duration: "Present Arc",
      description: [
        "Built ConvLSTM, Chronos, and Granite models for Sea Surface Temperature forecasting over the Arabian Sea.",
        "Designed and implemented a 4-stage post-processing pipeline utilizing NetCDF4 oceanographic datasets.",
      ],
      link: "https://github.com/dhanushofc/SatelliteGAN",
    },
    {
      role: "Educational Content Contributor",
      company: "Skillbanc",
      duration: "Contributor Arc",
      description: [
        "Created Manim-based mathematical animation templates for Grades 1–8, covering geometry, measurement, and symmetry.",
        "Contributed 10+ merged pull requests to the upstream repositories.",
      ],
      link: "https://github.com/Skillbanc/manim-templates",
    },
  ],
  projects: [
    {
      title: "Climate Stress Testing Simulator",
      subtitle: "Macro-Financial Risk Arc",
      description: "Assess financial stability and stress-test banking portfolios against global macro-climate risk scenarios using predictive modelling.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      link: "https://github.com/dhanushofc/Macro-Climate-Financial-Risk-Stress-Testing-Simulator",
    },
    {
      title: "Policy Trend Analysis Engine",
      subtitle: "Consumer Ingestion Arc",
      description: "Data pipeline engine that ingests, cleans, and tracks trends in consumer complaint streams against dynamic policy inputs.",
      tech: ["Python", "Pandas", "NLTK", "Pipelines"],
      link: "https://github.com/dhanushofc/Dynamic-Policy-Input-Trend-Analysis-Engine-for-Consumer-Complaints",
    },
    {
      title: "Financial Anomaly Detection",
      subtitle: "Predictive Time-Series Arc",
      description: "Automated detection of time-series anomalies and predictive forecasting in transaction data streams using statistical modeling.",
      tech: ["Python", "Scikit-learn", "NumPy", "Time-Series"],
      link: "https://github.com/dhanushofc/Automated-Financial-Anomaly-Detection-Trend-Forecasting",
    },
    {
      title: "SatelliteGAN",
      subtitle: "Ocean Forecasting Arc",
      description: "SST forecasting over the Arabian Sea using ConvLSTM, Chronos, Granite models, and NetCDF4 oceanographic data.",
      tech: ["Python", "ConvLSTM", "Chronos", "Granite", "NetCDF4"],
      link: "https://github.com/dhanushofc/SatelliteGAN",
    },
    {
      title: "Emergency Alert System",
      subtitle: "Safety Notification Arc",
      description: "A Python-based emergency alert system with immediate email and SMS notification integrations.",
      tech: ["Python", "Twilio API", "SMTPLIB", "Render"],
      link: "https://github.com/dhanushofc/emergency-alert-system",
    },
    {
      title: "Chat App",
      subtitle: "Real-time Communication Arc",
      description: "A full-featured real-time instant messaging application utilizing separate client and server architectures.",
      tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
      link: "https://github.com/dhanushofc/chat-app-frontend",
    },
    {
      title: "Manim Templates",
      subtitle: "Math Animation Arc",
      description: "Predefined animation components and mathematical visualization helpers built for interactive learning content.",
      tech: ["Python", "Manim", "Math", "Educational Content"],
      link: "https://github.com/dhanushofc/manim-templates",
    },
  ],
  techStack: [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "C++"],
    },
    {
      category: "Frontend",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Socket.IO", "MongoDB"],
    },
    {
      category: "ML & Data",
      skills: ["Scikit-learn", "OpenCV", "Manim", "Pandas", "NumPy"],
    },
    {
      category: "Tools & Services",
      skills: ["Git", "Twilio", "Vercel", "Render"],
    },
  ],
  certifications: [
    {
      title: "AWS Academy Graduate — Cloud Foundations",
      issuer: "AWS Academy",
      file: "/certificates/aws_cloud_foundations.pdf",
      badge: "/certificates/aws_cloud_foundations.png",
    },
    {
      title: "INCOIS Research Internship — SST Forecasting (Phase I & II)",
      issuer: "INCOIS",
    },
    {
      title: "Skillbanc Contributor Internship",
      issuer: "Skillbanc",
      file: "/certificates/skillbanc_internship.pdf",
    },
    {
      title: "MathWorks MATLAB Certification",
      issuer: "MathWorks",
      file: "/certificates/mathworks_credential.pdf",
    },
    {
      title: "FutureSkills Prime Tech Certification",
      issuer: "NASSCOM & MeitY",
      file: "/certificates/futureskills_certification.pdf",
    },
    {
      title: "NPTEL Academic Certification",
      issuer: "Ministry of Education / IIT",
      file: "/certificates/nptel_certification.pdf",
    },
    {
      title: "Kaggle Python Programming",
      issuer: "Kaggle",
    },
    {
      title: "Microsoft Azure AI-900: Azure AI Fundamentals",
      issuer: "Microsoft / Udemy",
    },
    {
      title: "Technical Symposium Participation",
      issuer: "Symposium",
      file: "/certificates/symposium_participation.jpg",
    },
    {
      title: "RBI National Quiz Participation",
      issuer: "Reserve Bank of India",
    },
  ],
  currentlyLearning: [
    {
      title: "Agentic System Design",
      description: "Architecting multi-agent coordinate networks, autonomous tool-use loops, and feedback loops.",
      progress: 80,
    },
    {
      title: "AI Systems Orchestration",
      description: "Learning how to build, deploy, align, and integrate large language models into software pipelines.",
      progress: 75,
    },
    {
      title: "Prompt Engineering & Context Design",
      description: "Designing structured contextual logic, few-shot prompting patterns, and evaluation frameworks.",
      progress: 90,
    },
    {
      title: "Data Engineering Pipelines",
      description: "Constructing clean features stores, ETL pipelines, and high-density analytical datasets.",
      progress: 70,
    },
    {
      title: "Modern ML & AI Foundations",
      description: "Deepening proficiency in neural architectures, computer vision pipelines, and tensor operations.",
      progress: 85,
    },
  ],
  links: {
    github: "https://github.com/dhanushofc",
    linkedin: "https://www.linkedin.com/in/dhanush-ginkala/",
    email: "mailto:dhanushhyd25@gmail.com",
  },
};
