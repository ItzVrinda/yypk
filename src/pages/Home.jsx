import React from "react";
import styles from "./Home.module.css";
import bannerImg from "../assets/IMG_8157.JPG";
import mandalaLeft from "../assets/mandala-left.png";
import mandalaRight from "../assets/mandala-right.png";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <img src={bannerImg} alt="Yoga-Pose" className={styles.heroImage} />
      </div>

      <div className={styles.servicesSection}>
        <img src={mandalaLeft} className={styles.leftMandala} />
        <img src={mandalaRight} className={styles.rightMandala} />

        <div className={styles.servicesGrid}>
          <div className={styles.columnRight}>
            <p>Flexible Timings</p>
            <p>Inspirational Tutors</p>
            <p>Personal Attention</p>
            <p>All Kriyas Under One Roof</p>
          </div>

          <div className={styles.verticalDivider}></div>

          <div className={styles.columnLeft}>
            <p>Yoga OPD</p>
            <p>Quality Services</p>
            <p>Gentle Flow</p>
            <p>Beginner Friendly</p>
          </div>
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
