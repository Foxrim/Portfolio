import styles from "./Slider.module.css";

import Card from "./components/card/Card.component";
import data from "../data/data.json";
import useSlider from "./hooks/useSlider";

export default function Slider() {
  const projects = data.projects;
  const projectShow = 3;

  const {
    visibleProjects,
    sliderRef,
    projectIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleCurrentIndex
  } = useSlider(projects, projectShow);

  return (
    <section className={styles.sliderContainer}>
      <div
        className={styles.slider}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {visibleProjects.length > 0 &&
          visibleProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              github={project.github || null}
              website={project.website || null}
            />
          ))}
      </div>

      <div className={styles.buttonContainer}>
        {visibleProjects.map((project, index) => (
          <button type="button" key={`index${index}-${project.title}`} className={index === projectIndex ? styles.active : ""} onClick={() => handleCurrentIndex(index)}/>
        ))}
      </div>
    </section>
  );
}
