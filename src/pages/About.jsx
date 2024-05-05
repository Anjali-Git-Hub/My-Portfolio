import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Container from "../components/Container";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Container>
        <h1 className={styles.hd}>Crafting Unique Experiences!</h1>
        <div className={styles.aboutSec}>
          <div className={styles.biblography}>
            <h2 className={styles.secHd}>biography</h2>
            <p>
              Hello there! I'm Anjali 🤚, a versatile professional in the realm
              of technology and design 🎨. With a passion for frontend
              development, web design, and content creation ✍, I thrive at the
              intersection of creativity and functionality. My journey in
              technology began with mastering the essentials: React, HTML, CSS,
              and JavaScript. Delving deeper, I honed my skills in Python 🐍,
              exploring its applications in diverse domains.
            </p>
            <p>
              My expertise extends beyond traditional web development; I
              specialize in crafting responsive web pages and designing
              captivating user interfaces. Currently, I'm immersed in the
              exciting world of machine learning and artificial intelligence 🤖,
              where I blend my web development prowess with AI technologies.
              From integrating ML models into web applications to exploring the
              frontiers of AI-driven interfaces, I'm committed to pushing
              boundaries and shaping the future of technology.👩‍💻
            </p>
            <p>
              In every project, I strive for innovation and excellence ✔, aiming
              to create seamless digital experiences that resonate with users.
              With a strong 💪 foundation in technology and a creative flair,
              I'm dedicated to building impactful solutions that inspire and
              empower.
            </p>
            <p>
              Join me 🤝 on this exhilarating journey as we explore the
              limitless possibilities of technology and design.
            </p>
          </div>
        </div>
        <div className={styles.expSec}>
          <h1 className={styles.expHd}>Experience</h1>
          <div className={styles.exp1}>
            <h2>
              {" "}
              Web Designer{" "}
              <span className={styles.company}>
                <Link to="@ Youth India E-School" target="_blank">
                  @ Youth India E-School
                </Link>
              </span>
            </h2>
            <h3>2022 | New Delhi, Delhi NCR, IND</h3>
            <p>
              In this role, I work as a frontend web designer who closely
              follows design specifications provided in a Figma file to create
              responsive web pages. I am responsible for implementing the visual
              and interactive elements of a website, ensuring that they match
              the design provided in the Figma file across various screen sizes
              and devices.
            </p>
          </div>
          <div className={styles.exp2}>
            <h2>
              Web Content Writer{" "}
              <span className={styles.company}>
                <Link
                  to="https://www.linkedin.com/company/web-solutions-india/?originalSubdomain=in"
                  target="_blank"
                >
                  @ Web Solutions
                </Link>
              </span>
            </h2>
            <h3>2023 | Mumbai Maharastra, IND</h3>
            <p>
              As a content writer, my work is to developing content that
              educates others about web technologies such as HTML, CSS, and
              JavaScript concepts.Additionally, I explore topics with limited
              information on the web, such as machine learning, artificial
              intelligence, and data science. My aim is to provide valuable
              insights and knowledge to help readers better understand these
              essential components of web development and emerging technologies.
            </p>
          </div>
        </div>
        <div className={styles.eduSec}>
          <h1 className={styles.eduHd}>Education</h1>
          <div className={styles.edu1}>
            <h2> Bachelor of Computer Application </h2>
            <h3>2021-2024 | Dev Bhoomi Uttarakhand University</h3>
            <p>
              Currently enrolled in the Bachelor's in Computer Application
              program spanning from 2021 to 2024. This course is equipping me
              with comprehensive knowledge and practical skills in the dynamic
              field of Information Technology, preparing me for a successful
              career in the rapidly evolving tech landscape.
            </p>
          </div>
          <div className={styles.edu2}>
            <h2>High School Education</h2>
            <h3>2016-2021 | Kendriya Vidhyalaya Indian Military Academy</h3>
            <p>
              Underwent a comprehensive high school education that formed the
              basis for both my academic and personal development. The diverse
              curriculum and supportive learning environment offered me a
              well-rounded education, covering various subjects and
              extracurricular activities.
            </p>
          </div>
        </div>
      </Container>
      <footer>
      <Link style={{ color: "black" }} to="https://twitter.com/codecwriter" target="_blank">
        <FaSquareXTwitter />
      </Link>

      <Link style={{ color: "black" }} to="https://www.linkedin.com/in/anjali-0352b1248/" target="_blank">
        <FaLinkedin />
      </Link>

      <Link style={{ color: "black" }} to="https://github.com/Anjali-Git-Hub" target="_blank">
        <FaSquareGithub />
      </Link>
      </footer>
    </>
  );
}

export default About;
