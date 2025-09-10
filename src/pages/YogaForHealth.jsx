import React from "react";
import styles from "./YogaForHealth.module.css";
import Accordion from "../components/Accordion";
export default function YogaForHealth() {
  return (
    <div className={styles.container}>
      <div className={styles.introduction}>
        <h2>For You</h2>
        <p>
          Our “Yoga for Health” section brings together a series of focused
          video sessions by Ms. Urvashi, designed to help you address specific
          health concerns through the wisdom of yoga. <br />
          <br />
          Each topic below features a personalized video where the instructor
          explains, demonstrates, and guides you through safe, effective yoga
          practices tailored for that particular health condition, whether it’s
          diabetes, high blood pressure, weight management, or meditation for
          mental clarity.
        </p>
      </div>
      <Accordion />
    </div>
  );
}
