import { Link, NavLink, Outlet } from "react-router-dom";
import Music from "../components/Music";

import styles from "./RootLayout.module.css";
import Socials from "../components/Socials";

function RootLayout() {
  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
        <Music />
      </nav>

      <Outlet />
    </>
  );
}

export default RootLayout;
