import React from "react";
import Container from "../components/Container";
import styles from "./Home.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Socials from "../components/Socials";
function Home() {
  const [text] = useTypewriter({
    words: [
      "A Frontend Developer",
      "Web Designer",
      "Do content writing",
      "A video Editor",
      "A Passionate Photographer",
    ],
    loop: {},
    typeSpeed: 130,
    deleteSpeed: 90,
  });

  return (
    <>
      <Container>
        <div className={styles.home}>
          <div className={styles.contentSec}>
            <h1>Hello! </h1>
            <h1>I'm Anjali.</h1>
            <h2>
              <span className={styles.title}>{text}</span>
              <span className={styles.cursor}>
                <Cursor cursorStyle="<" />
              </span>
            </h2>
            <p>
              A skilled Frontend developer, who is not only technically skilled
              but also confident in their abilities to create high-quality user
              interfaces (UIs) and interactive products.
            </p>
          </div>
          <div className={styles.imageSec}></div>
          <div className="socialMedia">
            <Socials />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
