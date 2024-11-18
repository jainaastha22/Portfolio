import project1 from "./assets/projects/project-1.jpg";
import project2 from "./assets/projects/project-2.jpg";
import project3 from "./assets/projects/project-3.jpg";
import project4 from "./assets/projects/project-4.jpg";
import project5 from "./assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate Software Developer  with a strong foundation in crafting dynamic and user-centric applications. With hands-on experience in front-end technologies like React and Tailwind CSS, alongside back-end skills in Java, Django, and MySQL, I aim to create scalable solutions that enhance user experiences and drive business success.`;

export const ABOUT_TEXT = `I am a dedicated software engineer specializing in full stack development. My expertise spans Java, React, Django and MySQL, complemented by experience in AWS services and machine learning. My journey in tech is fueled by a curiosity for problem-solving and a commitment to continuous learning. I thrive in collaborative settings and enjoy tackling complex challenges to deliver impactful solutions. Outside coding, I enjoy staying active and exploring emerging Technologies`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Java Developer Intern",
    company: "Oasis Infobyte",
    description: `Worked with Java to develop a Train Reservation System app using various utilities and an advanced Number Guessing with a user-friendly Interface.`,
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
  },
  {
    year: "2023 - 2024",
    role: "Editor",
    company: "IEEE BIT",
    description: ` Organized and participated in IEEE BIT events, including workshops and conferences, aimed at promoting knowledge sharing and networking within the field.`,
    technologies: ["Networking", "Management", "Content Writing", "Report writing"],
  },
];

export const PROJECTS = [
  {
    title: "Train Reservation System",
    image: project1,
    description:
      "A secure Java-based application that allows users to easily book and manage train reservations, featuring a user-friendly interface, cancellation options, and robust data validation to ensure a seamless experience.",
    technologies: ["Java", "Java Swing", "MySQL"],
  },
  {
    title: "Number Guessing Game",
    image: project2,
    description:
      "A Java-based interactive application where players guess a randomly generated number, featuring multiple difficulty levels, real-time feedback, and score tracking to enhance the gaming experience.",
    technologies: ["Java", "Java Swing"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Lane Detection and Speed Estimation",
    image: project4,
    description:
      "A project focused on real-time lane detection and speed estimation using computer vision techniques in Python, enhancing vehicle safety and navigation through advanced image processing algorithms.",
    technologies: ["Python", "Computer Vision", "Libraries: NumPy, OpenCV"],
  },
  {
    title: "Ranking Institutions using Federated Learning based on Student performance",
    image: project5,
    description:
      "A project used for ranking Institutions using Federated Learning focusing on security measures to protect sensitive data using a decentralized approach",
    technologies: ["Python", "AWS", "Machine Learning"],
  },
];

export const CONTACT = {
  address: "J.P nagar, Bangalore-560078 ",
  phoneNo: "7000665467",
  email: "jainaastha227@gmail.com",
};
