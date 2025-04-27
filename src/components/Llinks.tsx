import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Llinks: React.FC = () => {
  const { t } = useTranslation('links');
  const Llinks = t('links', { returnObjects: true });
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
        // If open but not locked, click locks it
        setLocked(true);
      } else if (isOpen && locked) {
        // If already locked and open, click unlocks and closes
        setLocked(false);
        setIsOpen(false);
      }
    }
    


  
    

      return (
        <>
        <div className="item fill button Llinks title2" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onClick={handleClick}><h2>{t('linksTitle')}</h2></div>

        <div className={`Llinksdrop ${isOpen ? 'grow' : 'shrink'}`} >
          {Llinks.map((link, index) => (
            <a
              key={index}
              className={` fill item link ${'drop'+index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseLeave={handleMouseLeave} 
              onMouseEnter={handleMouseEnter}
            >
              {link.title}
            </a>
          ))}
        </div>
        </>
      );







    
}


export default Llinks;