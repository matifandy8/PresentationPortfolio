import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, defaultTheme, FlexBox, FullScreen, Progress } from 'spectacle';
import './styles/brutal.css';
import IntroSlide from './slides/IntroSlide';
import SkillsSlide from './slides/SkillsSlide';
import ProjectSlide from './slides/ProjectSlide';
import ContactSlide from './slides/ContactSlide';
import ExperienceSlide from './slides/ExperienceSlide';


const theme = {
  ...defaultTheme,
  colors: {
    primary: '#2d2d2d',
    secondary: '#ff6b6b',
    tertiary: '#00ff9f',
    quaternary: '#fff',
    quinary: 'rgb(254, 247, 205)',
  },
  fonts: {
    header: '"Inter", sans-serif',
    text: '"Inter", sans-serif',
  },
  fontSizes: {
    h1: '3.5rem',
    h2: '2.5rem',
    text: '1.5rem',
  },
};

const Presentation: React.FC = () => {
  const transition = {
    from: {
      transform: 'translateY(50px)',
      opacity: 0,
      transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease-out',
    },
    enter: {
      transform: 'translateY(0px)',
      opacity: 1,
      transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease-out',
    },
    leave: {
      transform: 'translateY(50px)',
      opacity: 0,
      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease-out',
    }
  };
  return (
    <Deck  theme={theme} template={<DefaultTemplate color='#2d2d2d' />} transition={transition} >
      <IntroSlide />
      <ExperienceSlide />
      <SkillsSlide />
      <ProjectSlide />
      <ContactSlide />
    </Deck>
  );
};

const appElement = document.getElementById('app');
if (appElement) {
  createRoot(appElement).render(<Presentation />);
} else {
  console.error('No se encontró el elemento con id "app"');
}