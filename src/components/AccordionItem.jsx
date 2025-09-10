import React from "react";
import styles from "./AccordionItem.module.css";

export default function AccordionItem({
  isOpen,
  question,
  answer,
  onClick,
  ytLink,
}) {
  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionButton} ${isOpen ? styles.open : ""}`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {question}
        <span className={styles.icon}>{isOpen ? "▲" : "▼"}</span>
      </button>
      <div
        className={`${styles.accordionContent} ${
          isOpen ? styles.contentOpen : ""
        }`}
        style={{ maxHeight: isOpen ? "200px" : "0" }}
      >
        {isOpen && (
          <div className={styles.answer}>
            {answer}
            {ytLink && (
              <iframe
                width="560"
                height="315"
                src={ytLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
