import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Hassan Rauf Butt",
  title: "Full Stack Data & Software Engineer",
  tagline: "Building scalable distributed systems, data platforms, and user-centric applications.",
  about: "I am a versatile engineer bridging the gap between backend architecture, data engineering, and mobile development. With a Master's in AI and hands-on experience at Mylantech and DFKI, I specialize in building event-driven microservices, optimizing ETL pipelines, and deploying production-ready AI solutions. Whether it's architecting a FastAPI backend, optimizing a PostgreSQL query, or crafting a Flutter UI, I focus on scalability, performance, and clean code.",
  contact: {
    email: "hassanraufbutt21@gmail.com",
    linkedin: "https://linkedin.com/in/hassan-rauf-butt",
    github: "https://github.com/HassanButt2019",
    phone: "+49 176 21444539",
    location: "Berlin, Germany",
  },
  skills: [
    {
      name: "Backend & Distributed Systems",
      skills: ["FastAPI", "Python", "Node.js", "Microservices", "Kafka", "Redis", "REST APIs", "Event-Driven Architecture"]
    },
    {
      name: "Data Engineering & DB",
      skills: ["PostgreSQL", "MongoDB", "DuckDB", "ETL/ELT Pipelines", "SQL", "Data Modeling", "Airflow Concepts"]
    },
    {
      name: "Frontend & Mobile",
      skills: ["Flutter", "Dart", "React", "TypeScript", "Tailwind CSS", "State Management"]
    },
    {
      name: "DevOps & Cloud",
      skills: ["Docker", "GitHub Actions", "AWS", "CI/CD", "Fastlane", "Linux/Bash"]
    },
    {
      name: "AI & Machine Learning",
      skills: ["XGBoost", "Prophet", "SARIMA", "LangChain", "Google OR-Tools", "Data Preparation"]
    }
  ],
  experience: [
    {
      role: "Backend & Data Engineer",
      company: "Mylantech GmbH",
      location: "Munich, Germany",
      period: "Feb 2025 - Present",
      details: [
        "Designed distributed microservices with FastAPI, Node.js, and PostgreSQL for the Predictivo platform.",
        "Built a scalable data platform to ingest 500+ economic indicators (OECD, IMF) using asynchronous Python pipelines.",
        "Implemented a Natural Language → SQL query engine using DuckDB and LangChain.",
        "Developed forecasting pipelines (XGBoost, Prophet) integrated into PostgreSQL, improving reliability by 30%.",
        "Automated CI/CD pipelines with Docker and GitHub Actions for zero-downtime deployments."
      ]
    },
    {
      role: "Student Assistant - Backend Engineer",
      company: "DFKI (German Research Center for AI)",
      location: "Bremen, Germany",
      period: "Apr 2024 - Sep 2024",
      details: [
        "Developed scalable backend services with FastAPI and MongoDB, optimizing image processing throughput.",
        "Enhanced AI-driven task scheduling with Google OR-Tools for robotics environments.",
        "Built asynchronous data services with GridFS for large file handling and real-time responsiveness."
      ]
    },
    {
      role: "Flutter DevOps Engineer",
      company: "Allia Health",
      location: "Remote / Hybrid",
      period: "Feb 2023 - Aug 2024",
      details: [
        "Led development of mobile solutions integrating wearable data from 300+ devices.",
        "Achieved 40% reduction in development cycle time by optimizing CI/CD with Fastlane and GitHub Actions.",
        "Improved bug detection efficiency by 60% through automated unit and integration tests."
      ]
    }
  ],
  projects: [
    {
      title: "Predictivo Data Platform",
      type: "Work",
      description: "A comprehensive data ingestion and analytics platform processing economic indicators from global sources like Trade Economics and BLS.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "DuckDB", "Docker"]
    },
    {
      title: "NL-to-SQL Engine",
      type: "Work",
      description: "An intelligent query engine converting natural language questions into optimized SQL queries for analytics.",
      techStack: ["LangChain", "DuckDB", "OpenAI/Gemini APIs", "Python"]
    },
    {
      title: "Allia Health",
      type: "Independent",
      description: "Health Tracker app connecting to wearable devices for monitoring heart rate, sleep, and activity with real-time clinician chat.",
      techStack: ["Flutter", "Firebase", "Stream Chat", "Wearable APIs"]
    },
    {
      title: "Nuri Scanner",
      type: "Independent",
      description: "QR code scanner for product information with personalized health recommendations based on user profiles.",
      techStack: ["Flutter", "Stacked", "Node.js", "Cloud Storage"]
    },
    {
      title: "Social Chirp",
      type: "Independent",
      description: "Influencer marketing platform with collaboration hubs and graphical insights for social media performance.",
      techStack: ["Flutter", "Dart", "Analytics APIs"]
    },
     {
      title: "Digi-Diary",
      type: "Independent",
      description: "Secure personal journal with media uploads, encryption, and real-time cloud synchronization.",
      techStack: ["Flutter", "Dart", "Cloud Storage"]
    }
  ]
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Hassan Rauf Butt's portfolio website.
You have access to his professional background.
Answer questions about his skills, experience, and projects as if you are his digital representative.
Be professional, concise, and enthusiastic about his technical abilities in Backend, Data Engineering, and Flutter.
Here is his resume context:
${JSON.stringify(RESUME_DATA)}
If asked about contact info, provide his email.
`;
