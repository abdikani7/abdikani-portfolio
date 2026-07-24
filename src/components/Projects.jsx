// Projects.jsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgSrc: "/images/project-1.jpg",
    date: "15/01/2024",
    tag: "Web App",
    title: "Full stack music app",
    description:
      "A full stack music streaming app with playlists, search, and user authentication.",
    icons: [
      { src: "https://img.icons8.com/color/24/react-native.png", label: "React" },
      { src: "https://img.icons8.com/color/24/nodejs.png", label: "Node.js" },
      { src: "https://img.icons8.com/color/24/mongodb.png", label: "MongoDB" },
    ],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    date: "20/03/2024",
    tag: "AI Tool",
    title: "Free stock photo app",
    description:
      "A single-page app for browsing and downloading free stock photos via a public API.",
    icons: [
      { src: "https://img.icons8.com/color/24/react-native.png", label: "React" },
      { src: "https://img.icons8.com/color/24/api-settings.png", label: "API" },
    ],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    date: "05/02/2024",
    tag: "E-commerce",
    title: "Recipe app",
    description:
      "An app for discovering recipes by ingredient, cuisine, or dietary preference.",
    icons: [
      { src: "https://img.icons8.com/color/24/react-native.png", label: "React" },
      { src: "https://img.icons8.com/color/24/api-settings.png", label: "API" },
    ],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    date: "12/04/2024",
    tag: "Government",
    title: "Real state website",
    description:
      "A modern real estate listing site with property search and detail pages.",
    icons: [
      { src: "https://img.icons8.com/color/24/html-5--v1.png", label: "HTML" },
      { src: "https://img.icons8.com/color/24/css3.png", label: "CSS" },
    ],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header row */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-800">Projects</h2>
          <a
            href="#projects"
            className="flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-800"
          >
            View all projects
            <img
              src="https://img.icons8.com/ios-filled/14/0d9488/up-right.png"
              alt=""
              className="h-3 w-3"
            />
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {projects.map((project, key) => (
            <ProjectCard key={key} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
