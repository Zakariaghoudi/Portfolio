import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiGithub, DiResponsive } from 'react-icons/di';
import styles from './About.module.css';

export default function AboutPage() {
    const skills = [
  { name: 'HTML5', icon: <DiHtml5 color="#e34c26" />, size: '60px' },
  { name: 'CSS3', icon: <DiCss3 color="#2965f1" />, size: '60px' },
  { name: 'JavaScript', icon: <DiJavascript1 color="#f7df1e" />, size: '60px' },
  { name: 'React', icon: <DiReact color="#61dafb" />, size: '60px' },
  { name: 'Node.js', icon: <DiNodejs color="#68a063" />, size: '60px' },
  { name: 'GitHub', icon: <DiGithub color="#333" />, size: '60px' },
  { name: 'Responsive Design', icon: <DiResponsive color="#ff9800" />, size: '90px' },
    ];
  return (
    <div className={styles.aboutPage}>
      <h2 className={styles.pageTitle}>About Me</h2>

      <div className={styles.aboutContent}>
        <div className={styles.profileImageContainer}>
          <img
            src="./mypic.png"
            alt="A photo of me"
            className={styles.profileImage}
            width={400}
            height={400}
            placeholder="blur" // Optional: adds a blur effect while loading
          />
        </div>

        <div className={styles.textContainer}>
            <p>
              I am a highly motivated and results-driven web developer with a strong foundation in modern web technologies.
              My journey into programming began with a fascination for how digital experiences are built, leading me to
              immerse myself in front-end and back-end development.
            </p>
            <p>
              At GoMyCode, I've honed my skills in various aspects of web development, including responsive design,
              single-page applications, and API integration. I am passionate about creating user-centric solutions that are
              not only functional but also intuitive and aesthetically pleasing.
            </p>
        </div>
      </div>

      <h4 className={styles.subsectionTitle}>Skills & Expertise</h4>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillTag}>
            <span style={{ fontSize: skill.size }}>{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <h4 className={styles.subsectionTitle}>My Approach</h4>
      <p className={styles.subsectionp}>
        I believe in continuous learning and adapting to new technologies. My development process emphasizes clean
        code, modular architecture, and thorough testing to ensure robust and maintainable applications. I enjoy
        collaborating with teams and contributing to projects that make a real impact.
      </p>

      <h4 className={styles.subsectionTitle}>Education & Experience</h4>
      <div className={styles.experienceSection}>
        <div className={styles.experienceItem}>
          <h5 className={styles.experienceTitle}>Web Development Bootcamp</h5>
          <p className={styles.experienceCompany}>GoMyCode - 2025</p>
          <p className={styles.experienceDescription}>
            Intensive full-stack web development program covering modern technologies including React, Node.js, and
            database management. Completed multiple real-world projects and collaborated with peers on team-based
            assignments.
          </p>
        </div>
      </div>
    </div>
  );
}