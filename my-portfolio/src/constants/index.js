import project1 from "../Asset/project/Project-1.png";
import project2 from "../Asset/project/Project-2.png";
import project3 from "../Asset/project/Project-3.png";
import project4 from "../Asset/project/Project-4.png";

export const HERO_CONTENT = `
Hello there, I am Vitou, progressing to be a Full-Stack Developer .
I am passionate about problem-solving, researching, and reading. `;

export const ABOUT_TEXT = `
Hi, I am Vitou, a passionate Software Engineering student with a focus on Full-Stack Development. I have a keen interest in Front-end Development and hands-on experience building mini projects that showcase my skills in creating intuitive and responsive web applications.

My ultimate goal is to become a skilled Full-Stack Developer, crafting efficient and user-friendly solutions.

When I'm not coding, I enjoy exploring technology-related videos to stay updated and inspired.

Feel free to check out my projects below. I'm open to suggestions and always eager to improve—let's connect!

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
