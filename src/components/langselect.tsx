import { useState } from "react";
import { useTranslation } from "react-i18next";

const Langselect = () => {
  const { i18n } = useTranslation();
  const [lockedIsEn, setLockedIsEn] = useState(true);
  const [hoverIsEn, setHoverIsEn] = useState(null);

  function handleClick(isEn: boolean) {
    setLockedIsEn(isEn);
    i18n.changeLanguage(isEn ? 'en' : 'fr'); // Lock language when clicked
  }

  function handleMouseEnter(isEn: boolean) {
    setHoverIsEn(isEn as unknown as null);
    i18n.changeLanguage(isEn ? 'en' : 'fr'); // Also change language on hover!
  }
  function handleMouseLeave() {
    setHoverIsEn(null);
    i18n.changeLanguage(lockedIsEn ? 'en' : 'fr'); // Return to locked language
  }

  const currentIsEn = hoverIsEn !== null ? hoverIsEn : lockedIsEn;

  return (
    <div className="Langselect">
      <a
        href="#"
        className={`link item fill ${currentIsEn ? 'selected' : ''}`}
        onClick={(e) => { e.preventDefault(); handleClick(true); }}
        onMouseEnter={() => handleMouseEnter(true)}
        onMouseLeave={handleMouseLeave}
      >
        EN
      </a>
      <a
        href="#"
        className={`link item fillr ${!currentIsEn ? 'selected' : ''}`}
        onClick={(e) => { e.preventDefault(); handleClick(false); }}
        onMouseEnter={() => handleMouseEnter(false)}
        onMouseLeave={handleMouseLeave}
      >
        FR
      </a>
    </div>
  );
}

export default Langselect;
