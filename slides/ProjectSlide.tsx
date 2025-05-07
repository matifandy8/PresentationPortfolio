import { Code, Folder, Github, Globe } from "lucide-react";
import BrutalSlide from "../components/BrutalSlide";
import "../styles/ProjectSlide.css";
import { Appear, FlexBox, Image } from "spectacle";

export default function ProjectSlide() {
  const projects = [
    {
      title: "Destino Uruguay",
      description: "A web platform to discover cultural events, festivals, and travel destinations across Uruguay. It helps locals and tourists stay updated with curated content by automating data collection from official sources. The site features real-time updates, blog posts with information about city's and a user-friendly interface built for both desktop and mobile. Built with Next.js, TypeScript, Cheerio, and Nodemailer.",
      link: "https://destinouruguay.vercel.app/",
      github: "https://github.com/matifandy8/destinouruguay",
      image: "https://i.postimg.cc/K8PKWKDw/destinouruguay.png"
    },
    {
      title: "NeoBrutalismcss",
      description: "CSS library that provides a variety of utility classes to help you style your website. Library inspired by the Neo-Brutalist design trend. It provides a bold and consistent visual style out-of-the-box for developers who want fast and opinionated UI styling with zero JavaScript. Built with Html, CSS and Sass.",
      link: "https://matifandy8.github.io/NeoBrutalismCSS/",
      github: "https://github.com/matifandy8/NeoBrutalismCSS",
      image: "https://i.postimg.cc/66PG4xQj/neobrutalism-project.webp"
    },
  ];

  return (
    <BrutalSlide color="#b9e2f8">
      <FlexBox
        className="intro"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <h2>Projects <Folder size={35} /></h2>
        <ul className="projects__list">
          {projects.map((project, index) => (
            <Appear>
              <li
                key={index}
                className="project__item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project__info">
                  <p className="project__title">
                    {project.title}
                  </p>
                  <div className="project__links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Live Demo <Globe size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub <Github size={20} />
                    </a>
                  </div>
                  <p className="project__description">{project.description}</p>
                </div>
                <Image src={project.image} width="30%" />
              </li>
            </Appear>
          ))}
        </ul>
      </FlexBox>
    </BrutalSlide>
  );
}
