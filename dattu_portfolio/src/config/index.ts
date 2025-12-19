import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "MOHAN DATTU CHIMMIRI — Web Developer and Blockchain",
  author: "MOHAN DATTU CHIMMIRI",
  description:
    "B.Tech student specializing in blockchain technology. Proficient in Java and full-stack web development.",
  lang: "en",
  siteLogo: "/dattu-profile.jpeg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Certifications", href: "#skills" },
    { text: "Education", href: "#experience" },
    { text: "Projects", href: "#projects" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/mohan-dattu/" },
    { text: "Github", href: "https://github.com/mohandattu" },
    { text: "Email", href: "mailto:mohandattu007@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "MOHAN DATTU CHIMMIRI",
    specialty: "Web Developer and Blockchain",
    summary:
      "B.Tech student specializing in blockchain technology. Proficient in Java and full-stack web development, with hands-on experience in building scalable and responsive web applications.",
    email: "mohandattu007@gmail.com",
  },
  experience: [
    {
      company: "Kalasalingam Academy of Research and Education",
      position: "B.Tech in Information Technology",
      startDate: "2022",
      endDate: "2026",
      summary: [
        "Grade: 7.65",
      ],
    },
    {
      company: "Sri Chaitanya College",
      position: "Intermediate",
      startDate: "2020",
      endDate: "2022",
      summary: [
        "Grade: 8.65",
      ],
    },
  ],
  projects: [
    {
      name: "The AI Waste Oracle",
      summary: "Intelligent Waste Management System. Developed a full-stack web application for waste classification using a PyTorch model and integrated the Google Gemini API.",
      linkPreview: "https://github.com/mohandattu/AI-Waste-Oracle",
      linkSource: "https://github.com/mohandattu/AI-Waste-Oracle",
      image: "/waste.webp",
    },
    {
      name: "Smart Farming System",
      summary: "Empowering fields with intelligent technology. Predicts soil pH levels from images using a trained XGBoost model and offers smart farming advice via Gemini chatbot.",
      linkPreview: "https://github.com/mohandattu/smart-farming",
      linkSource: "https://github.com/mohandattu/smart-farming",
      image: "/farming.jpg",
    },
    {
      name: "Kisan Ghar",
      summary: "Supporting Local Farmers. A web platform that connects local farmers with health-conscious consumers, featuring an e-commerce marketplace.",
      linkPreview: "https://github.com/mohandattu/kisan-ghar",
      linkSource: "https://github.com/mohandattu/kisan-ghar",
      image: "/kisan-ghar.jpg",
    },
  ],
  about: {
    description: `
      I am a B.Tech student specializing in blockchain technology. Proficient in Java and full-stack web development, with hands-on experience in building scalable and responsive web applications. I am knowledgeable in the fundamentals of blockchain and smart contract concepts, and skilled in both frontend and backend development, database integration, and creating user-centric interfaces. I am a collaborative team player with a strong adaptability to new technologies and frameworks.
    `,
    image: "/dattu-profile.jpeg",
  },
  skills: [
    {
      category: "Web Development",
      items: ["Java", "CSS", "JavaScript", "HTML", "PHP", "Git", "GitHub"],
    },
    {
      category: "Blockchain",
      items: ["Smart contract development", "Solidity programming", "Wallet and transaction handling"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Certifications",
      items: [
        { text: "Java Programming – Infosys Springboard", url: "https://drive.google.com/file/d/1TweTz19D_zzcVCcr7MxlpsbFU5LsvpF2/view?usp=drivesdk" },
        { text: "High Impact Presentations – Infosys", url: "https://drive.google.com/file/d/1UAWzp_ZwlJXvv4PvEDtE5ZK9Xw57x7iJ/view?usp=drivesdk" },
        { text: "Oracle Cloud Infrastructure Architecture – Oracle", url: "https://drive.google.com/file/d/1ZXHFpISSaAgIqstrxYZopKrX_8hUOcdT/view?usp=drivesdk" },
        { text: "Database Management Systems – Infosys", url: "https://drive.google.com/file/d/1U4zMqy-CfNi7mrprgOondV4XVb0L0gEn/view?usp=drivesdk" },
      ],
    },
  ],
};
