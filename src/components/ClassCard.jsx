import React, { useState } from "react";
import styles from "./ClassCard.module.css";

export default function ClassCard({ image, title, description, boxData,cost }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={styles.card}
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <img src={image} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <a className={styles.link} href="#" onClick={(e) => e.preventDefault()}>
          Learn More
        </a>
      </div>
      {open && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialogBox}>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>
              ×
            </button>
            <img src={image} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{description}</p>
            <p className={styles.boxData}>{boxData}</p>
            <p className={styles.cost}>{cost}</p>
            {/* Add more details here if needed */}
          </div>
        </div>
      )}
    </>
  );
}
