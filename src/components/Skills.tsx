import { useEffect, useState } from "react";

const Skills: React.FC = () => {
  
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
    
  interface LinkData {
    title: string;
    url: string;
  }
  
    const [links, setLinks] = useState<LinkData[]>([]);
  
    useEffect(() => {
      fetch('/local/links.json')
        .then((res) => res.json())
        .then((data) => setLinks(data));
    }, []);

      return (
        <>
        <div className="item fill button Skills title2" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onClick={handleClick}><h2>SKILLS</h2></div>

        <div className={`Skillsdrop ${isOpen ? 'grow' : 'shrink'}`} >
          {links.map((link, index) => (
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

export default Skills;