import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.css";

const faqData = [
  {
    question: "Yoga for Diabetes",
    answer:
      "Yoga can help manage blood sugar, improve circulation, and reduce stress for people with diabetes.",
  },
  {
    question: "Yoga for High BP",
    answer:
      "Specific yoga poses and breathing techniques can support healthy blood pressure by calming the nervous system.",
  },
  {
    question: "Yoga for Weight Loss",
    answer:
      "A regular yoga practice can boost metabolism and mindfulness around eating, supporting weight loss goals.",
    ytLink: "https://www.youtube.com/embed/idTjSD0ZHFo?si=RF2_FA9YNAla6CDN",
  },
  {
    question: "Meditation",
    answer:
      "Meditation cultivates a sense of inner calm, reduces stress, and helps improve overall well-being.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.accordionContainer}>
      {faqData.map((item, idx) => (
        <AccordionItem
          key={idx}
          isOpen={openIndex === idx}
          question={item.question}
          answer={item.answer}
          ytLink={item.ytLink}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
