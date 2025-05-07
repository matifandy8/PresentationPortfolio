import { FlexBox } from 'spectacle';
import BrutalSlide from '../components/BrutalSlide';
import '../styles/SkillsSlide.css';
import { Code } from 'lucide-react';

interface BrutalSlideProps {
  color?: string;
  children: React.ReactNode;
}

const SkillsSlide: React.FC = () => {
  return (
    <BrutalSlide color="quaternary">
      <FlexBox
        className="skills"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <h1 className="skills__title">My Skills <Code size={35} /></h1>
        <ul className="skills__list">
          <li>React</li>
          <li>TypeScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>Valibot</li>
          <li>Git</li>
        </ul>
      </FlexBox>
    </BrutalSlide>
  );
};

export default SkillsSlide;