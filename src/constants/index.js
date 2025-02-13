import { Github } from "lucide-react";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#Home",
  },
  {
    id: "1",
    title: "Expereince",
    url: "#Experience",
  },
  {
    id: "2",
    title: "Projects",
    url: "#Projects",
  },
  {
    id: "3",
    title: "Skills @ TeckStack",
    url: "#TechStack",
  },

  {
    id: "5",
    title: "Contact Me",
    url: "#ContactMe",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const ongoingProjects = [
  {
    id: "0",
    title: "Project Management System",
    text: "A full-stack application where teams can assign, track, and manage tasks. Built with Next.js, AWS, Express, Prisma, and Docker.",
    date: "Feb 2024",
    status: "progress",
    imageUrl: "/ongoing11.png",
    colorful: true,
  },
  {
    id: "1",
    title: "University Enrollment Portal",
    text: "A web portal enabling students to enroll in universities and courses. Developed using Next.js and Web API (C#).",
    date: "Jan 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Learning Management System",
    text: "A marketplace for online courses where teachers can sell courses and students can buy them. Built using Next.js, ShadCN, AWS, Docker, Express, and Prisma.",
    date: "Feb 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "CRM for Lead Management",
    text: "A React Native-based CRM system to track leads, assign them to counselors, and update status notifications with comments.",
    date: "Dec 2023",
    status: "done",
    imageUrl: "/ongoing22.png",
  },
];
export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "APS Admission Panel Website",
    text: "A dynamic and user-friendly admission panel built with Next.js, integrating a WordPress API for seamless content management. Features a beautiful UI, smooth navigation, and an optimized experience for students and administrators.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/apswebsite-in-nextjs.git",
  },
  {
    id: "1",
    title: "Next.js LMS Platform",
    text: "A full-stack Learning Management System where teachers can sell courses and students can purchase them seamlessly. Built with Next.js, ShadCN for UI, AWS for cloud storage, Prisma for database management, and Docker for containerized deployment. Ensures a smooth and scalable learning experience.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/learning-managment-fullStack.git",
  },

  {
    id: "2",
    title: "Real-Time Chat App",
    text: "A fast and secure real-time messaging app built with React Native and Firebase. Supports instant messaging, push notifications, media sharing, and real-time database updates for a seamless chatting experience. Designed for both iOS and Android with a smooth and responsive UI.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/chatapp.git",
  },
  {
    id: "3",
    title: "APS Admission Panel Mobile App",
    text: "The mobile version of the APS Admission Panel, built with React Native for seamless access to admission-related features on the go.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/ApsBlogApp.git",
  },
  {
    id: "4",
    title: "LMS Mobile App UI",
    text: "A beautifully designed and fully animated LMS app UI in React Native, featuring smooth transitions, custom-designed components, and an engaging user experience.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/LMS.git",
  },
  {
    id: "5",
    title: "Real Estate Property App",
    text: "A stunning and highly interactive real estate app built with React Native. Features smooth animations, a modern UI, property listings, and an intuitive browsing experience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/learning-managment-fullStack.git",
  },
  {
    id: "6",
    title: "Role-Based Web API",
    text: "A secure and well-structured Web API built with C#, implementing role-based access control. Ensures users have access to resources based on their assigned roles, enhancing security and scalability.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/pokemon.git",
  },
  {
    id: "7",
    title: "Full-Stack Backend Course",
    text: "A comprehensive backend development course covering Prisma, Docker, AWS, Express, and PostgreSQL. Designed to build scalable and efficient backend applications with modern technologies.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/Full-Backend.git",
  },
  {
    id: "8",
    title: "React Native CRM App",
    text: "A powerful CRM app for counselors to manage leads, follow-ups, call and email status, WhatsApp integration, and call history. Provides a seamless workflow for tracking and engaging with clients efficiently.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/leadManagement-app.git",
  },
  {
    id: "9",
    title: "APS Blog App",
    text: "A company blog application fetching real-time articles and updates from their WordPress website using the WordPress API. Ensures seamless content synchronization with an elegant UI.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/ApsBlogApp.git",
  },
  {
    id: "10",
    title: "Society Management App UI",
    text: "A beautifully designed React Native app for managing gated societies. Features include real-time chat, digital gate pass, family member management, visitor tracking, and essential community services.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1/SocietyMgmt-App.git",
  },
  {
    id: "11",
    title: "Multiple Custom Projects & Solutions",
    text: "Developed a variety of web and mobile applications tailored to different business needs, including e-commerce platforms, admin dashboards, financial tools, and enterprise-level solutions using Next.js, React Native, Prisma, Docker, AWS, and more.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
    projectUrl: "https://github.com/iamsajan1",
  },
];

export const techText =
  "Passionate about full-stack development, cloud solutions, and backend optimization. Always exploring new technologies to improve performance and scalability.";

export const techSkills = [
  {
    id: "0",
    title: "Frontend Development",
    text: "HTML, CSS, JavaScript, React.js, Next.js, React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "Backend Development",
    text: "Node.js, Express.js, ASP.NET Core, Web APIs, Prisma, Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    width: 36,
    height: 36,
  },
  {
    id: "2",
    title: "Databases & ORMs",
    text: "PostgreSQL, Drizzle ORM, Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    width: 36,
    height: 36,
  },
  {
    id: "3",
    title: "Cloud & DevOps",
    text: "AWS, Docker (basic)",
    icon: "https://cdn.simpleicons.org/nextdotjs/000000",
    width: 36,
    height: 36,
  },
  {
    id: "4",
    title: "Programming Languages",
    text: "JavaScript, C, Python (basic), PHP (basic), C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    width: 36,
    height: 36,
  },
  {
    id: "5",
    title: "Other Skills",
    text: "SEO, Git, Web3, Sanity, WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    width: 36,
    height: 36,
  },
  {
    id: "6",
    title: "Recent Learnings",
    text: "Drizzle ORM, Advanced Backend Optimization",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    width: 36,
    height: 36,
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: "/linkedin (1).png",
    url: "https://www.linkedin.com/in/santosh-kumar-shrivastava-b6623a14a/",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: "/twitter.png",
    url: "https://x.com/SajanSi19713732",
  },
  {
    id: "2",
    title: "Github",
    iconUrl: "/github.png",
    url: "https://github.com/iamsajan1",
  },
  {
    id: "3",
    title: "WhatsApp",
    iconUrl: "/whatsapp.png",
    url: "https://wa.me/+918957924272",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: "/facebook.png",
    url: "#",
  },
  // {
  //   id: "5",
  //   title: "Gmail",
  //   iconUrl: "/gmail.png",
  //   url: "mailto:kumarsantosh.iict06a@gmail.com",
  // },
];
