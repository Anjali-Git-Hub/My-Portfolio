import React from "react";
import Container from "../components/Container";
import styles from "./Projects.module.css";

import majorProject1 from "../assets/majorProject1.png";
import majorProject2 from "../assets/majorProject2.png";
import subProject1 from "../assets/subProject1.png";
import subProject2 from "../assets/subProject2.png";
import cn from "../assets/cn.jpg";
import js from "../assets/js.jpg";

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Projects() {
  return (
    <>
      <Container>
        <h1 className={styles.hd}>
          Every great project begins with a spark of inspiration <br /> !
        </h1>
        <div className={styles.projects}>
          <div className={styles.majorProject}>
            <div className={styles.image}>
              <Link
                to="https://movies-fetch-webapp.netlify.app/"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={majorProject1}
                  alt="movie search app"
                />
              </Link>
            </div>
            <div className={styles.content}>
              <h3>featured project</h3>
              <h2>
                <Link
                  to="https://movies-fetch-webapp.netlify.app/"
                  target="_blank"
                >
                  Movies App
                </Link>
              </h2>
              <p>
                A platform where you can search any movie . For full
                documentation navigate to github.
              </p>
              <div className={styles.projectLinks}>
                <Link
                  to="https://github.com/Anjali-Git-Hub/Movies-WebApp.git"
                  target="_blank"
                >
                  <FaGithub style={{ color: "black" }} />
                </Link>
                <Link
                  className={styles.visitBtn}
                  to="https://movies-fetch-webapp.netlify.app/"
                  target="_blank"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.subProjects}>
            <div className={styles.subF}>
              <Link
                style={{ height: "100%" }}
                to="https://todo-react-application-ss.netlify.app/"
              >
                <img loading="lazy" src={subProject1} alt="TOdo application" />
              </Link>

              <div className={styles.subContent}>
                <h3>featured project</h3>
                <h2>
                  <Link to="https://todo-react-application-ss.netlify.app/">
                    Todo Application
                  </Link>
                </h2>
                <div className={styles.projectLinks}>
                  <Link
                    className={styles.visit}
                    to="https://todo-react-application-ss.netlify.app/"
                  >
                    Visit
                  </Link>
                  <Link to="https://github.com/Anjali-Git-Hub/Todo-Application.git">
                    <FaGithub style={{ color: "black" }} />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.subS}>
              <Link
                style={{ height: "100%" }}
                to="https://blackafe.netlify.app/"
              >
                <img loading="lazy" src={subProject2} alt="blackafe website" />
              </Link>
              <div className={styles.subContent}>
                <h3>featured project</h3>
                <h2>
                  <Link to="https://blackafe.netlify.app/">
                    Blackafe Website
                  </Link>
                </h2>
                <div className={styles.projectLinks}>
                  <Link
                    className={styles.visit}
                    to="https://blackafe.netlify.app/"
                  >
                    Visit
                  </Link>
                  <Link to="https://github.com/Anjali-Git-Hub/BLACKAFE-WEBSITE.git">
                    <FaGithub style={{ color: "black" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.majorProject}>
            <div className={styles.image}>
              <Link
                style={{ height: "100%" }}
                to="https://ajuba-shopping-store-app.netlify.app/"
              >
                <img
                  loading="lazy"
                  src={majorProject2}
                  alt="ajuba shopping store"
                />
              </Link>
            </div>
            <div className={styles.content}>
              <h3>featured project</h3>
              <h2>
                <Link to="https://ajuba-shopping-store-app.netlify.app/">
                  Shopping Store App
                </Link>
              </h2>
              <p>
                This is a shopping store app. And the full details about this
                project you will get on github so navigate there!
              </p>
              <div className={styles.projectLinks}>
                <Link to="https://github.com/Anjali-Git-Hub/Ajuba-Shopping-Store.git">
                  <FaGithub style={{ color: "black" }} />
                </Link>
                <Link
                  className={styles.visitBtn}
                  to="https://ajuba-shopping-store-app.netlify.app/"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.blogs}>
          <h1 className={styles.hd}>
            welcome to a world where every word is an adventure!
          </h1>
          <div className={styles.mainBlogs}>
            <div>
              <Link
                to="https://helpingtechies.hashnode.dev/spread-operator-in-javascript"
                target="_blank"
                style={{ height: "65%" }}
              >
                <img loading="lazy" src={js} alt="Image of laptop" />
              </Link>
              <div className={styles.blogContent}>
                <h2>
                  <Link
                    to="https://helpingtechies.hashnode.dev/spread-operator-in-javascript"
                    target="_blank"
                  >
                    Spread operator in JavaScript
                  </Link>
                </h2>
                <p>
                  In this article, I discussed about spread operator in
                  JavaScript in detail.{" "}
                </p>
                <h3>3 min read</h3>
              </div>
            </div>
            <div>
              <Link
                to="https://helpingtechies.hashnode.dev/tcpip-and-tcpip-vs-osi-model"
                target="_blank"
                style={{ height: "65%" }}
              >
                <img loading="lazy" src={cn} alt="image of cables" />
              </Link>
              <div className={styles.blogContent}>
                <h2>
                  <Link
                    to="https://helpingtechies.hashnode.dev/tcpip-and-tcpip-vs-osi-model"
                    target="_blank"
                  >
                    TCP-IP And TCP-IP vs OSI Model
                  </Link>
                </h2>
                <p>
                  In this Article, i have discussed the TCP/IP model. I also
                  covered the differences between TCP/IP and OSI model.
                </p>
                <h3>3 min read</h3>
              </div>
            </div>
          </div>
          <h2 className={styles.secHd}>All articles</h2>
          <div className={styles.restBlogs}>
            <div>
              <h2>
                <Link
                  to="https://helpingtechies.hashnode.dev/backward-compatible-forward-compatible"
                  target="_blank"
                >
                  Backward and Forward Compatible
                </Link>
              </h2>
              <h3>1 min read</h3>
            </div>
            <div>
              <h2>
                <Link
                  to="https://helpingtechies.hashnode.dev/demystifying-computer-networks"
                  target="_blank"
                >
                  Demystifying Computer Networks
                </Link>
              </h2>
              <h3>1 min read</h3>
            </div>
            <div>
              <h2>
                <Link
                  to="https://helpingtechies.hashnode.dev/weird-history-of-javascript"
                  target="_blank"
                >
                  Weird History Of Javascript
                </Link>
              </h2>
              <h3>3 min read</h3>
            </div>
            <div>
              <h2>
                <Link
                  to="https://helpingtechies.hashnode.dev/const-keyword-datatypes-in-javascript"
                  target="_blank"
                >
                  const Keyword / Datatypes In JavaScript
                </Link>
              </h2>
              <h3>5 min read</h3>
            </div>
          </div>
        </div>
      </Container>
      <footer>
        <p>2024 &#169; All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Projects;
