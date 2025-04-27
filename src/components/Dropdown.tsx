import { useEffect, useState } from "react";

const Dropdown: React.FC = () => {
  
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
        <div className="item fill button link title2" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onClick={handleClick}><h2>PROJECTS</h2></div>

        <div className={`Dropdown ${isOpen ? 'grow' : 'shrink'}`} >
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


export default Dropdown;