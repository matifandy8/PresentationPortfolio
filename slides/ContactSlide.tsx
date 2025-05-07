import { FlexBox } from "spectacle";
import BrutalSlide from "../components/BrutalSlide";
import "../styles/ContactSlide.css";

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
        <h2 className="contact__title">Let's Connect</h2>
        <ul className="contact__list">
          <li className="contact__link">
            <a href="https://www.linkedin.com/in/matiasfandino/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/matifandy8" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://matiasfandino.vercel.app/" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </li>
        </ul></FlexBox>
    </BrutalSlide>
  );
}
