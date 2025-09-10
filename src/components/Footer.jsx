
import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logoyoga.png';

export default function Footer() {

return(
    <>
<footer className={styles.footer}>
<div className={styles.logoSection}>
<img src={logo}/>
</div>

<div className={styles.contactSocial}>
        <div className={styles.contactBlock} id="contact-us">
          <div className={styles.contactHeader}>CONTACT US</div>
          <div className={styles.contactDetails}>
            <div>urvatee@gmail.com</div>
            <div>+91 8595681827</div>
            <div>Ghaziabad, Uttar Pradesh</div>
          </div>
        </div>
        </div>

<div className={styles.socialBlock}>
  <div className={styles.socialHeader}>FOLLOW US</div>
  <div className={styles.socialIcons}>
    <a href="mailto:urvatee@gmail.com" aria-label="Email">
      <i className="fas fa-envelope"></i>
    </a>
    <a href="https://facebook.com/" aria-label="Facebook">
      <i className="fab fa-facebook-f"></i>
    </a>
     <a href="https://twitter.com/" aria-label="Twitter"> 
      <i className="fab fa-twitter"></i> 
    </a>
    <a href="https://www.instagram.com/yogtirthyogprashikshadkendra/" aria-label="Instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com/company/yogtirth-yog-prashikshan-kendra/" aria-label="LinkedIn">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>


</footer>
</>
);


}