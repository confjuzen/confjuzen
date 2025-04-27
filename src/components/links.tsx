// src/components/links.tsx
import React, { useEffect, useState } from 'react';

interface LinkData {
  title: string;
  url: string;
}

const Links: React.FC = () => {
  const [links, setLinks] = useState<LinkData[]>([]);

  useEffect(() => {
    fetch('/local/links.json')
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          className={` fill item link ${'link'+index}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.title}
        </a>
      ))}
    </>
  );
};

export default Links;
