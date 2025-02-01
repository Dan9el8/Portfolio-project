import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I’m a frontend developer with a strong background in React.
              I'm passionate about optimizing performance and keeping up with the latest trends to ensure I deliver high-quality, user-friendly applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I’m a backend developer with a strong background in Django, Node.js, and Actix. I specialize in building reliable server-side applications and managing databases like PostgreSQL and MongoDB. I also use tools like Nginx for efficient server management, Trello for project organization, and Postman for thorough API testing. I’m passionate about creating efficient systems that seamlessly integrate with frontend technologies
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I’m a UI designer passionate about creating intuitive, visually appealing designs using tools like Figma and Adobe XD.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};