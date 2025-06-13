import { useState } from "react";
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation('About');
  const Skills = t('skills', { returnObjects: true }) as Array<{ skills: string }>;
  const [isOpen, setIsOpen] = useState(false);
  const [locked, setLocked] = useState(false);

  function handleMouseEnter() {
    if (!locked) {
      setIsOpen(true);
    }
  }

  function handleMouseLeave() {
    if (!locked) {
      setIsOpen(false);
    }
  }

  function handleClick() {
    if (isOpen && !locked) {
      setLocked(true);
    } else if (isOpen && locked) {
      setLocked(false);
      setIsOpen(false);
    }
  }

  // Add safety check to ensure Skills is an array
  const skillsArray = Array.isArray(Skills) ? Skills : [];

  return (
    <>
      <div className="item fill button skills title2" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onClick={handleClick}>
        <h2>{t('skillsTitle')}</h2>
      </div>

      <p className="item about">{t('about')} </p>

      <div className={`skillsdrop ${isOpen ? 'grow' : 'shrink'}`}>
        {skillsArray.map((skill, index: number) => (
          <p
            key={index}
            className={`fill item skills ${'drop'+index}`}
            rel="noopener noreferrer"
            onMouseLeave={handleMouseLeave} 
            onMouseEnter={handleMouseEnter}
          >
            {skill.skills}
          </p>
        ))}
      </div>
    </>
  );
}

export default About;