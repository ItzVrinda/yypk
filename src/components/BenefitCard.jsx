
import React from 'react';
import styles from './BenefitCard.module.css';

export default function BenefitCard({ image, title, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardText}>{description}</p>
    </div>
  );
}