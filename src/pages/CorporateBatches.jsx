import React from 'react';
import styles from './CorporateBatches.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BenefitCarousel from '../components/BenefitCarousel';

export default function CorporateBatches() {
  
      return (
        <>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h3>Corporate Yoga Programs: Cultivating Calm & Connection</h3>
          <p>
            At Yogtirth, we know that a peaceful mind and a strong sense of teamwork can transform any workplace. Our corporate yoga programs are thoughtfully designed for organizations that want to invest in their team’s wellbeing and effectiveness. We create a welcoming space where employees can unwind, reconnect, and return to work refreshed and motivated. <br/>
            <br/>
            By nurturing both mind and body, we help teams unlock their true potential. With every session, your workplace moves closer to a culture of resilience, balance, and inspired collaboration. Let Yogtirth be the partner that supports your team, every step of the way.
          </p>

        </div>

        <div className={styles.row}>
          <div className={styles.leftCol}>
            <h3 className={styles.subHeader}>What We Offer</h3>
            <p>
              Our tailored sessions are led by experienced instructors who blend mindful movement, practical breathing techniques, and modern approaches to stress relief. Whether you’re looking for an immersive wellness journey or a quick relaxation break, our flexible programs can be customized to fit your organization’s needs.

Each session encourages interactive learning, group bonding, and real-world application, empowering your team with skills they’ll use well beyond the mat.

            </p>
          </div>

            <div className={styles.rightCol}>
               <h3 className={styles.subSideHeader}>Benefits You Get</h3>
              <BenefitCarousel />
              
            </div>
        </div>
      </div>
      </>
    );
  
}