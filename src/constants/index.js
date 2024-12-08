import { bornfire } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  xd,
  after,
  ai,
  bootstrap,
  docker,
  figma,
  java,
  linux,
  photoshop,
  premiere,
  spring,
  sql,
  tomcat,
  task,
  designing,
  blog,
  portfolio,
} from "../assets/icons";

export const skills = [
  // Frontend
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },

  // Backend
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: spring,
    name: "Spring Boot",
    type: "Backend",
  },

  // Database
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },

  // DevOps
  {
    imageUrl: tomcat,
    name: "Apache Tomcat",
    type: "Server",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },

  // Version Control
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  // Operating System
  {
    imageUrl: linux,
    name: "Linux",
    type: "Operating System",
  },

  // Design
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: photoshop,
    name: "Adobe Photoshop",
    type: "Design",
  },
  {
    imageUrl: ai,
    name: "Adobe Illustrator",
    type: "Design",
  },
  {
    imageUrl: xd,
    name: "Adobe XD",
    type: "Design",
  },

  // Video Editing
  {
    imageUrl: premiere,
    name: "Adobe Premiere Pro",
    type: "Video Editing",
  },
  {
    imageUrl: after,
    name: "Adobe After Effects",
    type: "Video Editing",
  },
];

export const experiences = [
  {
    title: "Full Stack Java Developer",
    company_name: "Bornfire Innovations",
    icon: bornfire,
    iconBg: "#accbe1",
    date: "January 2020 - Present",
    points: [
      "Developing and maintaining secure banking applications using Java Spring, HTML, CSS, and JavaScript.",
      "Ensuring high security in application architecture, adhering to banking compliance standards.",
      "Collaborating with cross-functional teams to design, develop, and deliver scalable solutions.",
      "Implementing responsive web designs to enhance user experience and accessibility.",
      "Debugging, testing, and deploying applications to maintain seamless functionality and reliability.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/riyas2309/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mohamedriyasashrafali/",
  },
];

export const projects = [
  {
    iconUrl: designing,
    theme: "btn-back-red",
    name: "UI/UX Designing",
    description:
      "Designed UI/UX for a webpage selling courses, mobile login/signup pages for a food ordering app, and a newsletter. Focused on creating user-friendly and visually appealing interfaces for an enhanced user experience.",
    link: "https://github.com/riyas2309/CODSOFT",
  },
  {
    iconUrl: blog,
    theme: "btn-back-green",
    name: "Blog app",
    description:
      "Built a full-stack Blog App using the MERN stack (MongoDB, Express, React, Node.js) with user authentication, CRUD operations for posts, and a comment system. Designed a responsive interface and an admin panel for managing blog posts",

    link: "https://github.com/riyas2309/Blog_App",
  },
  {
    iconUrl: task,
    theme: "btn-back-yellow",
    name: "To-Do app",
    description:
      "Developed a To-Do app using the MERN stack (MongoDB, Express, React, Node.js), allowing users to create, update, and delete tasks. Implemented user authentication, task categorization, and a responsive design for seamless use across devices.",
    link: "https://github.com/riyas2309/To-Do-App",
  },
  {
    iconUrl: bornfire,
    theme: "btn-back-blue",
    name: "BRBUAE",
    description:
      "Designed Jasper reports and developed the frontend for various reports and the KYC module for the Bank of Baroda, enabling verification, modification, and downloading of customer details. Handled SQL queries using SQL Developer and contributed to backend functionality.",
  },
  {
    iconUrl: bornfire,
    theme: "btn-back-pink",
    name: "BTMFA",
    description:
      "Developed a BTM fingerprint attendance API using Python, which captures employee attendance and updates it automatically in the employee database.",
  },
  {
    iconUrl: portfolio,
    theme: "btn-back-orange",
    name: "Personal Portfolio",
    description:
      "Built a dynamic portfolio webpage using React and Three.js, incorporating interactive 3D elements to showcase projects and skills in an engaging manner.",
  },
];
