"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
function Page() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>Our Projects</h1>
      <ul className={styles.projectGrid}>
        {projects.map((project) => (
          <li
            key={project.id}
            className={styles.projectCard}
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDescription}>{project.description}</p>
              <span className={styles.cardTech}>
                {project.techStack.join(" • ")}
              </span>
              <div className={styles.cardLinks}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
