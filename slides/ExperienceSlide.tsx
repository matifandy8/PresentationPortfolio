import { Appear, FlexBox, ListItem, Text } from "spectacle";
import BrutalSlide from "../components/BrutalSlide";
import "../styles/ExperienceSlide.css";
import { BriefcaseBusiness, Calendar } from "lucide-react";

const ExperienceSlide = () => {
  return (
    <BrutalSlide color="#40d39c">
      <FlexBox
        className="intro"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <h1 className="title">Experience <BriefcaseBusiness size={35} /></h1>
        <Appear className="experience">
          <Text className="description" style={{ margin : "0rem" }}>
            Frontend Developer at Hogarth
            <span>2022 - 2025 <Calendar size={20} /></span>
          </Text>
          <ListItem textAlign="left" style={{ color : "#000" }}>
          Developed 50+ responsive email templates for important client using HTML and CSS, ensuring total render accuracy across clients (Gmail, Outlook, Apple Mail).
          </ListItem>
          <ListItem textAlign="left" style={{ color : "#000" }}>
          Built dynamic, SEO-optimized web pages using Vue.js and Next.js, enhancing site performance more than 90% (Lighthouse scores).
          </ListItem>
        </Appear>
        <Appear className="experience">
          <Text className="description" style={{ margin : "0rem" }}>
                Alkemy - Course
            <span>2021 - JULY TO SEPTEMBER <Calendar size={20} /></span>
          </Text>
          <ListItem textAlign="left" style={{ color : "#000" }}>
          The Alkemy Bootcamp, where I followed agile methodologies (Scrum), focusing on iterative development and team collaboration to address real-world challenges. Contributed to a user-friendly and functional solution while enhancing skills in version control, peer reviews, and task prioritization.
          </ListItem>
        </Appear>
        <Appear className="experience">
          <Text className="description" style={{ margin : "0rem" }}>
          Jóvenes a Programar - Course
            <span>2020 - ABRIL TO DECEMBER <Calendar size={20} /></span>
          </Text>
          <ListItem textAlign="left" style={{ color : "#000" }}>
          Learn Web developer technoligies as javascript, HTML, CSS and Javascript
          </ListItem>
          <ListItem textAlign="left" style={{ color : "#000" }}>
          Focused on the development and improvement of transversal skills such as teamwork, self-regulation, and determination, fostering a growth mindset and adaptability in diverse environments.
          </ListItem>
        </Appear>

      </FlexBox>
    </BrutalSlide>
  );
};

export default ExperienceSlide;