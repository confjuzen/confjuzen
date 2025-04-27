


  import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollNavigation: React.FC = () => {
  const navigate = useNavigate();  // Using useNavigate instead of useHistory
  const pages = ['/', '/webdev', '/graphics'];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // Track the current page index to prevent unnecessary navigation
  const [prevPageIndex, setPrevPageIndex] = useState<number | null>(null);

  useEffect(() => {
    // Avoid navigation if the page hasn't changed
    if (currentPageIndex !== prevPageIndex) {
      navigate(pages[currentPageIndex]);
      setPrevPageIndex(currentPageIndex); // Update the previous page index
    }
  }, [currentPageIndex, prevPageIndex, navigate, pages]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scroll down: Go to the next page if not on the last page
        if (currentPageIndex < pages.length - 1) {
          setCurrentPageIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        // Scroll up: Go to the previous page if not on the first page
        if (currentPageIndex > 0) {
          setCurrentPageIndex((prevIndex) => prevIndex - 1);
        }
      }
    };

    // Listen for the scroll event
    window.addEventListener('wheel', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentPageIndex, pages]); // Dependency on currentPageIndex to track changes

  return (
    <>
    </>
  );
};

export default ScrollNavigation;
