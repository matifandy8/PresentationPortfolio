import { FlexBox } from "spectacle";
import BrutalSlide from "../components/BrutalSlide";
import "../styles/IntroSlide.css";

const IntroSlide = () => {
  return (
    <BrutalSlide color="rgb(254, 247, 205)">
      <FlexBox
        className="intro"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <h1
          className="intro__title"
          aria-label="Introduction: Matías Fandiño, Web Developer"
        >
          Hi, I'm Matías Fandiño 👋
        </h1>
        <p className="intro__description">
          Web developer specializing in front-end development
        </p>
      </FlexBox>
    </BrutalSlide>
  );
};

export default IntroSlide;