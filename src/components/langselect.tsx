import { useState } from "react";

const Langselect = () => {
  const [isEng, setIsEng] = useState(true);
  const [locked, setLocked] = useState(false);


  function handleClick() {
    if (isEng && !locked) {
      setLocked(true);
    } else if (isEng && locked) {
      setLocked(false);
      setIsEng(false);
    }
  }


  function handleMouseEnter() {
    if (!locked) {
      setIsEng(true);
    }
  }

  function handleMouseLeave() {
    if (!locked) {
        setIsEng(false);
    }
  }

  function handleClickfr() {
    if (isEng && locked) {
      setLocked(true);
    } else if (isEng && !locked) {
      setLocked(false);
      setIsEng(false);
    }
  }
  function handleMouseEnterfr() {
    if (locked) {
      setIsEng(true);
    }
  }

  function handleMouseLeavefr() {
    if (locked) {
        setIsEng(false);
    }
  }


  return (
    <div className={`Langselect`}>
      <a
        href="#"
        className={`link item fill ${isEng ? 'selected' : ''}`}
        onClick={(e) => { e.preventDefault(); handleClick();}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ENG
      </a>
      <a
        href="#"
        className={`link item fillr ${!isEng ? 'selected' : ''}`}
        onClick={(e) => { e.preventDefault(); handleClickfr(); }}
        onMouseEnter={handleMouseEnterfr}
        onMouseLeave={handleMouseLeavefr}
      >
        FR
      </a>
    </div>
  );
}

export default Langselect;
