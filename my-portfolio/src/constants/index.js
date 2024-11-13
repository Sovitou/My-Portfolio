import project1 from "../Asset/project/Project-1.png";
import project2 from "../Asset/project/Project-2.png";
import project3 from "../Asset/project/Project-3.png";
import project4 from "../Asset/project/Project-4.png";

export const HERO_CONTENT = `
Hello there, I am Vitou, progressing to be a Full-Stack Developer .
I am passionate about problem-solving, researching, and reading. `;

export const ABOUT_TEXT = `
"I'm Vitou, a Software Engineering student focused on Full-Stack Development with a passion for Front-end Development. I enjoy building mini projects and strive to create intuitive, responsive web applications. When I'm not coding, I stay inspired by exploring technology-related videos. Let's connect and share ideas!"
`;
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
    link: "https://sovitou.github.io/TinDog/",
  },
  {
    title: "Guessing Number",
    image: project2,
    description:
      "A single-player game where the player attempts to guess a randomly generated number within a specified range",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://sovitou.github.io/Guessing-Game/",
  },
  {
    title: "Pig-Dice Game",
    image: project3,
    description:
      "A multiplayer game where players take turns rolling a die to accumulate points",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://sovitou.github.io/Pig-Dice-Game/",
  },
  {
    title: "SerkSa",
    image: project4,
    description: "A landing modern website of an interactive learning app ",
    technologies: ["React", "Firebase", "SaSS"],
    link:"",
  },
];

export const CONTACT = {
  address: "Peam Oknha Ong, Arey Ksat, Kandal, Cambodia",
  phoneNo: "+855 96 432 0251 ",
  email: "khemsovitou@gmail.com",
};
