import React from 'react';
import styles from './AboutUs.module.css'
import banner from '../assets/newbanner.png'
import UrvashiMam from '../assets/urvashimam.jpg'

export default function AboutUs() {
 
     return (
     <div className={styles.container}>
       <section className={styles.topSection}>
        <div className={styles.heading}>
          <h2>
            <br/>
            ABOUT <br/> 
            YOGTIRTH YOG <br/> PRASHIKSHAN <br/> 
            KENDRA
          </h2>
        </div>

      <div className={styles.text}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta orci tellus, at consectetur massa faucibus auctor. Nunc maximus metus ac gravida pellentesque. Aenean neque odio, efficitur et odio eget, finibus malesuada turpis. Aliquam efficitur, velit quis efficitur auctor, ex orci pellentesque leo, id vestibulum leo nunc in sem. Cras sed purus id enim vulputate imperdiet. Phasellus dignissim quam sem, vitae tincidunt nisi ultrices vitae. Quisque fermentum, libero sed mattis commodo, mauris mi.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta orci tellus, at consectetur massa faucibus auctor. Nunc maximus metus ac gravida pellentesque. Aenean neque odio, efficitur et odio eget, finibus malesuada turpis. Aliquam efficitur, velit quis efficitur auctor, ex orci pellentesque leo, id vestibulum leo nunc in sem.


        </p>
      </div>
</section>

<div className={styles.bannerWrapper}>
  <img src={banner} alt="Yogtirth Banner" className={styles.bannerImg}/>
</div>

<section className={styles.statsSection}>
  <div className={styles.statCard}>
    <div className={styles.statValue}>200+</div>
    <div className={styles.statLabel}>Happy Clients</div>
  </div>
  <div className={styles.statDivider}></div>
  <div className={styles.statCard}>
    <div className={styles.statValue}>5+</div>
    <div className={styles.statLabel}>Years of <br/> Experience</div>
  </div>
  <div className={styles.statDivider}></div>
  <div className={styles.statCard}>
    <div className={styles.statValue}>30+</div>
    <div className={styles.statLabel}>Corporate Workshops <br/>Conducted</div>
  </div>
  <div className={styles.statDivider}></div>
  <div className={styles.statCard}>
    <div className={styles.statValue}>95%</div>
    <div className={styles.statLabel}>Client Retention <br/> Rate</div>
  </div>
</section>




<section className={styles.teamSection}> 
<h2 className={styles.teamHeading}> OUR TEAM </h2>
<div className={styles.teamCards}>

<div className={styles.teamCard}>
<img
src={UrvashiMam}
alt="Urvashi Tyagi"
/>

<div className={styles.teamInfo}>
  <div className={styles.teamName}> URVASHI TYAGI </div>
<div className={styles.teamDesc}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta orci tellus, at consectetur massa faucibus auctor. Nunc maximus metus ac gravida pellentesque.

</div>
</div>
</div>

<div className={styles.teamCard}>
<img
src={UrvashiMam}
alt="Urvashi Tyagi"
/>

<div className={styles.teamInfo}>
  <div className={styles.teamName}> URVASHI TYAGI </div>
<div className={styles.teamDesc}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta orci tellus, at consectetur massa faucibus auctor. Nunc maximus metus ac gravida pellentesque.

</div>
</div>
</div>

<div className={styles.teamCard}>
<img
src={UrvashiMam}
alt="Urvashi Tyagi"
/>

<div className={styles.teamInfo}>
  <div className={styles.teamName}> URVASHI TYAGI </div>
<div className={styles.teamDesc}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta orci tellus, at consectetur massa faucibus auctor. Nunc maximus metus ac gravida pellentesque.

</div>
</div>
</div>

</div>
</section>

     </div>
   );
 
}