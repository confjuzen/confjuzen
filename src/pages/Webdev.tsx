//import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Webdev: React.FC = () => {
  const { t } = useTranslation('webprojects'); 
  const projects = Object.values(t('webprojects', { returnObjects: true })); // Get the projects as an array

//  const [isOpen, setIsOpen] = useState(false);
//  const [locked, setLocked] = useState(false);

//  function handleMouseEnter() {
//    if (!locked) {
//      setIsOpen(true);
//    }
//  }
//
//  function handleMouseLeave() {
//    if (!locked) {
//      setIsOpen(false);
//    }
//  }
//
//// / function handleClick() {
/// /   if (isOpen && !locked) {
///      setLocked(true);
///    } else if (isOpen && locked) {
///      setLocked(false);
///      setIsOpen(false);
///    }
///  }

  return (
    <>


      <div className={"webProjects"}>
        {projects.map((project, index) => (
          <Link
            key={index}
            className={`fill item link ${'drop' + index}`}
            to={project.url}
            rel="noopener noreferrer"
     //       onMouseLeave={handleMouseLeave}
     //       onMouseEnter={handleMouseEnter}
          >
            {project.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Webdev;
