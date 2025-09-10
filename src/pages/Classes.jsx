import React from "react";
import styles from "./Classes.module.css";
import ClassCard from "../components/ClassCard";
import yoga1 from "../assets/yoga1.png";
import yoga2 from "../assets/yoga2.png";
import yoga3 from "../assets/yoga3.png";
import yoga4 from "../assets/yoga4.png";
import yoga5 from "../assets/yoga5.png";
import yoga6 from "../assets/yoga6.png";
import yoga7 from "../assets/yoga7.png";
import yoga8 from "../assets/yoga8.png";

const classData = [
  {
    title: "Fitness Yoga",
    description: "Perfect for starters. Focus on breath and basics.",
    image: yoga1,
    boxData: "This is some additional information about Fitness Yoga. It includes details about the class structure, benefits, and what to expect during the sessions.",
  },
  {
    title: "Power Yoga",
    description: "Traditional practice to balance mind and body.",
    image: yoga2,
  },
  {
    title: "Regular Yoga",
    description: "Dynamic poses for strength and flexibility.",
    image: yoga3,
  },
  {
    title: "Yog Nidra",
    description: "Wake up routine to energize your day.",
    image: yoga4,
  },
  {
    title: "Facial Yoga",
    description: "For slimming of face",
    image: yoga5,
  },

  {
    title: "Advanced Asanas",
    description: "To make you a pro",
    image: yoga6,
  },

  {
    title: "Personalised",
    description: "Curated just for you",
    image: yoga7,
  },

  {
    title: "Meditation",
    description: "For peace of mind",
    image: yoga8,
  },
];



export default function Classes() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Yoga Classes</h2>
      <div className={styles.cardsWrapper}>
        {classData.map((item, index) => (
          <ClassCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            boxData={item.boxData}
          />
        ))}
      </div>
    </div>
  );
}
