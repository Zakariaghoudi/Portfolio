"use client";
import styles from "./page.module.css";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div className={styles.home}>
        <div className={styles.page}>
          <div> Hi there,</div>
          <h1> I'm Zakaria Ghoudi </h1>
          <span> Software Development with AI skills</span>
          <TypeAnimation
            sequence={[
              "I am a highly motivated and results-driven web developer with a strong foundation in modern web technologies. My journey into programming began with a fascination for how digital experiences are built, leading me to immerse myself in front-end and back-end development.",
              1000,
            ]}
            speed={50}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
          />
          <div className={styles.buttons}>
            <Link href="/contact">
              <button className={styles.btn1}>Get in Touch</button>
            </Link>
          </div>
        </div>
        <img src="/mypic.png" alt="Zakaria Ghoudi" className={styles.image} />

        <div className={styles.statsContainer} ref={ref}>
          <div className={styles.stat}>
            <span className={styles.number}>
              {inView ? <CountUp end={1} duration={2} /> : "0"}+
            </span>
            <p>Years of experience</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>
              {inView ? <CountUp end={8} duration={5} /> : "0"}+
            </span>
            <p>Completed projects</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>
              {inView ? <CountUp end={10} duration={3} /> : "0"}+
            </span>
            <p>Satisfied clients</p>
          </div>
        </div>
      </div>
    </>
  );
}
