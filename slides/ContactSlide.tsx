import { FlexBox } from "spectacle";
import BrutalSlide from "../components/BrutalSlide";
import "../styles/ContactSlide.css";
import { Github, Globe, Linkedin, Mail } from "lucide-react";

export default function ContactSlide() {
  return (
    <BrutalSlide color="#bc98cb">
      <FlexBox
        className="intro"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <h2 className="contact__title">Let's Connect <Mail size={35}/></h2>
        <ul className="contact__list">
          <li className="contact__link">
            <a href="https://www.linkedin.com/in/matiasfandino/" target="_blank" rel="noopener noreferrer">
              LinkedIn <Linkedin size={20} />
            </a>
          </li>
          <li className="contact__link">
            <a href="https://github.com/matifandy8" target="_blank" rel="noopener noreferrer">
              GitHub <Github size={20} />
            </a>
          </li>
          <li className="contact__link">
            <a href="https://matiasfandino.vercel.app/" target="_blank" rel="noopener noreferrer">
              Portfolio <Globe size={20} />
            </a>
          </li>
        </ul></FlexBox>
    </BrutalSlide>
  );
}
