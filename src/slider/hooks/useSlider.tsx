import { useState, useRef } from "react";

type Card = {
  title: string;
  image: string;
  description: string;
  github: string | null;
  website: string | null;
};

const useSlider = (projects: Card[], projectShow: number) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const visibleProjects = [];
  for (let i = 0; i < projectShow; i++) {
    visibleProjects.push(projects[(projectIndex + i) % projects.length]);
  }

  const handlePrev = () => {
    setProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const handleNext = () => {
    setProjectIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  
  //   ANIMATION SLIDER
    
  //   SLIDER TACTILE MOBILE
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchX;

    if (touchDiff > 150) {
      handleNext();
      setTouchStartX(null);
    } else if (touchDiff < -150) {
      handlePrev();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  // SELECT SLIDE
  const handleCurrentIndex = (index: number) => {
    setProjectIndex(index);
  };

  return {
    projectIndex,
    visibleProjects,
    handlePrev,
    handleNext,
    sliderRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleCurrentIndex,
  };
};

export default useSlider;
