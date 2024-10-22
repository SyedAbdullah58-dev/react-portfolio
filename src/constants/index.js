import project1 from "../assets/projects/web1.jpg";
import project2 from "../assets/projects/s5.jpg";
import project3 from "../assets/JobsPage.jpg";
import project4 from "../assets/rest_api_dotnetcore.jpg";

export const HERO_CONTENT = `Passionate software engineer with a knack for building cutting-edge applications using the latest technologies. With expertise in C#, Dart, Flutter, .NET Core, and SQL Server, I bring a wealth of knowledge to every project I undertake. Whether it's developing robust backend systems or creating engaging user interfaces, I'm always up for a challenge.

I take pride in writing clean, efficient code that delivers the best possible performance.As a skilled problem-solver and team player, I thrive in collaborative environments and enjoy working with cross-functional teams to deliver exceptional results. With a track record of delivering high-quality work on time and on budget, I'm confident in my ability to meet and exceed your expectations.

Let's connect to discuss how my skills and expertise can help drive your organization's success.`;

export const ABOUT_TEXT = `I am Syed Abdullah, a passionate Software Engineer with a knack for problem-solving and strong communication skills. As a technology enthusiast, I am committed to continuous growth in the Software Development domain, always aiming to deliver quality work within deadlines. I thrive in environments that provide opportunities for mentorship and growth, and I'm always looking for ways to enhance my skills. Beyond work, I love meeting new people, socializing, staying fit, and consistently seeking ways to develop myself both personally and professionally.`;

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
    title: "Employee Access Portal",
    image: project1,
    description:
      "This project is complete revamp of an old Employe Portal developed with cutting edge technology and latest architechture. Build with micorservices architechture utilizing gateway pattern",
    technologies: [".Net Core", "Microservices", "React", "Vue.js", "SQL SERVER"],
  },
  {
    title: "Social Media App",
    image: project2,
    description:
      "Built with Flutter, offers a seamless and engaging user experience. It features real-time messaging, media sharing, and personalized news feeds, all wrapped in a sleek and responsive design. The app leverages Flutter's cross-platform capabilities, ensuring consistent performance across both iOS and Android devices, while providing smooth animations, push notifications, and easy navigation for users to stay connected effortlessly.",
    technologies: [ "Dart", "Flutter", "Firebase"],
  },
  {
    title: "React Jobs Portal",
    image: project3,
    description:
      "Our Job Portal, developed with React, is a dynamic platform connecting job seekers with employers. It offers a user-friendly interface, allowing candidates to search, apply, and track job applications effortlessly. Employers can post jobs, review applications, and manage listings efficiently.",
    technologies: ["HTML", "CSS", "REACT"],
  },
  {
    title: "EAP Portal Microservices Architecture",
    image: project4,
    description:
      "Our project, built using Microservices Architecture with Ocelot API Gateway, is designed to deliver a scalable and efficient system. Each service is independently developed, deployed, and maintained, allowing for modular functionality like user management, payment processing, and notifications. Ocelot acts as the API gateway, efficiently routing client requests to the appropriate microservice, ensuring secure and seamless communication.",
    technologies: [".Net Core", "C#", "Microservices Architecture", "Rabbit MQ", "Ocelot"],
  },
];

export const CONTACT = {
  phoneNo: "+92 3341157461",
  email: "syedabdullah199758@gmail.com",
};
