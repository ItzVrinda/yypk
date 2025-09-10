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
    boxData:
      "This program is designed for beginners who want to build a strong foundation. Sessions cover breathing techniques, simple stretches, and gentle postures. It improves flexibility and helps relieve stiffness. Ideal for those starting their wellness journey.",
    cost: "₹1900/month",
  },
  {
    title: "Power Yoga",
    description: "Traditional practice to balance mind and body.",
    image: yoga2,
    boxData:
      "A high-energy workout that combines traditional yoga with modern fitness. Perfect for burning calories while building strength and endurance. It enhances stamina and tones muscles. Great for those who love fast-paced routines.",
    cost: "₹1700/month",
  },
  {
    title: "Regular Yoga",
    description: "Dynamic poses for strength and flexibility.",
    image: yoga3,
    boxData:
      "This program balances physical activity with relaxation. Classes include asanas, pranayama, and cool-down stretches. It improves posture, flexibility, and overall well-being. Suitable for all age groups.",
    cost: "₹1700/month",
  },
  {
    title: "Yog Nidra",
    description: "Wake up routine to energize your day.",
    image: yoga4,
    boxData:
      "Known as 'yogic sleep,' this practice deeply relaxes both mind and body. Sessions include guided meditation and breathing. It reduces stress, improves focus, and promotes restful sleep. Recommended for people with hectic lifestyles.",
    cost: "₹800/month",
  },
  {
    title: "Facial Yoga",
    description: "For slimming of face",
    image: yoga5,
    boxData:
      "Specialized exercises designed to tone facial muscles and improve blood circulation. Helps reduce puffiness and promotes natural glow. Regular practice supports anti-aging benefits. Easy to follow at home too.",
    cost: "₹900/month",
  },

  {
    title: "Advanced Asanas",
    description: "To make you a pro",
    image: yoga6,
    boxData:
      "Focused on mastering challenging poses with balance and strength. Includes headstands, arm balances, and deep backbends. Best for experienced practitioners aiming to level up. Improves resilience and body control.",
    cost: "₹2000/month",
  },

  {
    title: "Personalised",
    description: "Curated just for you",
    image: yoga7,
    boxData:
      "One-on-one customized yoga sessions tailored to your goals. Whether it’s weight loss, flexibility, or stress management, trainers create a plan just for you. Flexible timings and personalized care. Ideal for those who need special attention.",
    cost: "₹3000/month",
  },

  {
    title: "Meditation",
    description: "For peace of mind",
    image: yoga8,
    boxData:
      "A calming practice to bring clarity and balance to your daily life. Includes guided mindfulness, breathing exercises, and focus training. Reduces anxiety, improves concentration, and promotes inner peace. Suitable for everyone.",
    cost: "₹1900/month",
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
            cost={item.cost}
          />
        ))}
      </div>
    </div>
  );
}
