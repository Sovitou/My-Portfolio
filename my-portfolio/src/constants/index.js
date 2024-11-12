import project1 from "../Asset/project/Project-1.png";
import project2 from "../Asset/project/Project-2.png";
import project3 from "../Asset/project/Project-3.png";
import project4 from "../Asset/project/Project-4.png";

export const HERO_CONTENT = `
Hello there, I am Vitou, progressing to be a Full-Stack Developer .
I am passionate about problem-solving, researching, and reading. `;

export const ABOUT_TEXT = `I am Vitou , a Software Engineering student in Phnom Penh with a strong passion for tech innovation and development. I am currently working on several projects and sectors.
Beyond my academic pursuits, I am actively self-taught Full-Stack Web Development through platforms like Coursera, LinkedIn Learning, Udemy, and YouTube. I have had the opportunity to participate in several tech competitions, such as the Techno Innovation Challenge (Season 7), Unipreneur National Challenge, Ideathon (Season 3),and SmartStart ULP National Hackathon (Season 4) where I honed my skills in management, coding, design, and research.
I am passionate about building solutions that solve real-world problems and I am always looking for opportunities to learn, grow, and make an impact.`;
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Project Manager",
    company: "SerkSa",
    description: `Led a team in developing and designing a learning web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "TinDog",
    image: project1,
    description: "An interactive landing for dog dating app",
    technologies: ["HTML", "CSS", "BootStrap"],
  },
  {
    title: "Guessing Number",
    image: project2,
    description:
      "A single-player game where the player attempts to guess a randomly generated number within a specified range",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Pig-Dice Game",
    image: project3,
    description:
      "A multiplayer game where players take turns rolling a die to accumulate points",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "SerkSa",
    image: project4,
    description: "A landing modern website of an interactive learning app ",
    technologies: ["React", "Firebase", "SaSS"],
  },
];

export const CONTACT = {
  address: "Peam Oknha Ong, Arey Ksat, Kandal, Cambodia",
  phoneNo: "+855 96 432 0251 ",
  email: "khemsovitou@gmail.com",
};
