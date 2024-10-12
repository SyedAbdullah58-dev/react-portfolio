import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Passionate software engineer with a knack for building cutting-edge applications using the latest technologies. With expertise in C#, Dart, Flutter, .NET Core, and SQL Server, I bring a wealth of knowledge to every project I undertake. Whether it's developing robust backend systems or creating engaging user interfaces, I'm always up for a challenge.

I take pride in writing clean, efficient code that delivers the best possible performance. My ability to learn quickly and adapt to new technologies has enabled me to stay ahead of the curve in a constantly evolving industry.

As a skilled problem-solver and team player, I thrive in collaborative environments and enjoy working with cross-functional teams to deliver exceptional results. With a track record of delivering high-quality work on time and on budget, I'm confident in my ability to meet and exceed your expectations.

Let's connect to discuss how my skills and expertise can help drive your organization's success.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Present",
    role: "Software Developer",
    company: "Contour Software",
    description: `I have experience in developing and scaling robust REST APIs within a microservices architecture, ensuring secure systems and efficient inter-service communication. On the frontend, I work with Vue.js to build user interfaces, and I integrate with ERP systems via APIs. Additionally, I collaborate closely with clients to gather requirements and provide updates throughout the development process`,
    technologies: [".Net Core", "React.js", "SQL Server", "Web API"],
  },
  {
    year: "May 2022 - Feb 2024",
    role: "Junior Software Developer",
    company: "Contour Software",
    description: `Worked on a complete revamp of the Employee Access Portal, improving its functionality, user experience, and security measures.\n- Developed RESTful APIs using .NET Core 6, adhering to clean architecture principles.\n- Designed and implemented a microservices architecture following the Gateway pattern, enabling modular and scalable application development.\n- Contributed to the database design efforts, ensuring efficient data storage and retrieval, and optimizing query performance.\n- Worked on a worker service for asynchronous processing, which reads the CSV files and sends its data to API for processing.`,
    technologies: [ "Microsoft SQL Server",
      "ASP.NET Core",
      "Vue",
      "REST APIs",
      "Agile Methodologies",
      "C#",
      "ASP.NET MVC",
      "Entity Framework",
      ".NET Framework",
      ".NET Core"],
  },
  {
    year: "DEC 2021 - APR 2022",
    role: "Trainee Software Developer",
    company: "Contour Software",
    description: `Did the internship and completed the full stack training on Web Development`,
    technologies: ["Java", "C#", "Springboot", ".Net core" ,"React"],
  },
  {
    year: "JUN 2021 - NOV 2021",
    role: "Flutter Developer",
    company: "Techorra",
    description: `As a Flutter developer, I was responsible for building and maintaining cross-platform mobile applications. I collaborated with UI/UX designers to implement responsive and user-friendly interfaces, optimized app performance, and integrated third-party APIs for enhanced functionality. I also conducted thorough testing to ensure high-quality deliverables and worked with the team to resolve any issues or bugs efficiently.`,
    technologies: ["Dart", "Flutter", "Firebase", "APIs"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
