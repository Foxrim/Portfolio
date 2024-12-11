import { useEffect, useRef, useState } from "react";
import data from "../data/data.json";
import styles from "../styles/Gallery.module.css";

interface GalleryProps {
  onProjectSelect: (projectId: number) => void;
}

export default function Gallery({ onProjectSelect }: GalleryProps) {
  const [selectedById, setSelectedById] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollButtons = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        setCanScrollUp(scrollTop > 0);
        setCanScrollDown(scrollTop + clientHeight < scrollHeight * 0.9);
      }
    };

    updateScrollButtons();
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", updateScrollButtons);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -500, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 500, behavior: "smooth" });
    }
  };

  const handleClick = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const chooseProject = (projectId: number) => {
    const newSelectedId = selectedById === projectId ? null : projectId;
    setSelectedById(newSelectedId);
    if (newSelectedId !== null) {
      onProjectSelect(newSelectedId);
    }
  };

  const mostRecentProject = data.projets.reduce((latest, current) => {
    const latestDate = new Date(latest.date.number);
    const currentDate = new Date(current.date.number);
    return currentDate > latestDate ? current : latest;
  });

  const sortedProjects = data.projets.sort((a, b) => {
    const dateA = new Date(a.date.number);
    const dateB = new Date(b.date.number);
    return dateB.getTime() - dateA.getTime();
  });

  const groupedProjects: { [key: string]: (typeof data.projets)[0][] } =
    sortedProjects.reduce(
      (acc: { [key: string]: (typeof data.projets)[0][] }, project) => {
        const date = project.date.letter;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(project);
        return acc;
      },
      {},
    );

  return (
    <>
      <div className={styles.gallery} ref={scrollRef}>
        {canScrollUp && (
          <div
            onClick={scrollUp}
            onKeyDown={scrollUp}
            className={styles.scrollUp}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        )}

        <div className={styles.timeline}>
          <h2>Le plus récent</h2>
        </div>
        <div
          className={
            selectedById === mostRecentProject.id
              ? styles.showcase
              : styles.showcase_off
          }
        >
          <h3
            onClick={() => chooseProject(mostRecentProject.id)}
            onKeyDown={() => chooseProject(mostRecentProject.id)}
            key={mostRecentProject.id}
          >
            {mostRecentProject.title}
          </h3>
          {selectedById === mostRecentProject.id && (
            <span
              onClick={handleClick}
              onKeyDown={handleClick}
              className={`${"material-symbols-outlined"} ${styles.add_2}`}
            >
              add_2
            </span>
          )}
        </div>
        {selectedById === mostRecentProject.id ? (
          <a
            href={mostRecentProject?.link}
            key={`link-${mostRecentProject.id}`}
            className={styles.link_showcase}
          >
            Lien
          </a>
        ) : (
          <hr
            key={`span-${mostRecentProject.id}`}
            className={styles.link_showcase_off}
          />
        )}

        {Object.keys(groupedProjects).map((date) => (
          <div className={styles.timelineContainer} key={date}>
            <div className={styles.timeline}>
              <h2>{date}</h2>
            </div>
            {groupedProjects[date].map((project) => (
              <div key={project.id}>
                <div
                  className={
                    selectedById === project.id
                      ? styles.showcase
                      : styles.showcase_off
                  }
                >
                  <h3
                    onClick={() => chooseProject(project.id)}
                    onKeyDown={() => chooseProject(project.id)}
                  >
                    {project.title}
                  </h3>
                  {selectedById === project.id && (
                    <span
                      onClick={handleClick}
                      onKeyDown={handleClick}
                      className={`${"material-symbols-outlined"} ${styles.add_2}`}
                    >
                      add_2
                    </span>
                  )}
                </div>
                {selectedById === project.id ? (
                  <a
                    key={project.id}
                    href={project?.link}
                    className={styles.link_showcase}
                  >
                    Lien
                  </a>
                ) : (
                  <hr key={project.id} className={styles.link_showcase_off} />
                )}
              </div>
            ))}
          </div>
        ))}

        {canScrollDown && (
          <div
            onClick={scrollDown}
            onKeyDown={scrollDown}
            className={styles.scrollDown}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        )}
      </div>

      {data.projets.map((projet) => {
        return (
          isVisible &&
          selectedById === projet.id && (
            <section className={styles.projetModal} key={projet.id}>
              <div className={styles.projetModalTitle}>
                <h2>{projet.title}</h2>
                <span
                  onClick={handleClick}
                  onKeyDown={handleClick}
                  className="material-symbols-outlined"
                >
                  close
                </span>
              </div>
              <div className={styles.projectModalDescritpion}>
                <p>Description :</p>
                <p>{projet.description}</p>
                <p>Objectifs :</p>
                <p>{projet.objectif}</p>
              </div>
              <div className={styles.iconContainer}>
                {projet.language.map((language) => {
                  return (
                    <figure key={language.name}>
                      <img src={language.icon} alt={language.name} />
                    </figure>
                  );
                })}
              </div>
              <a className={styles.projectModalLink} href={projet?.link}>
                Lien
              </a>
              <hr />
            </section>
          )
        );
      })}
    </>
  );
}
