import React from "react";
import styles from "../styles/landing.module.css";
import icon from "../assets/icon.svg";
export default function Hero() {
  return (
    <>
     <div className={styles.hero}>
     <div className={styles.container}>
        <section className={styles.main}>
          <div className={styles.content}>
            <button>Gene-ius</button>
            <h1>Department of Animal Breeding And Genetics</h1>
            <p>Dna Extraction and Biotechnology</p>
            <div className={styles.circle}>
              <p>ABG Department</p>
            </div>
          </div>
          <div className={styles.image}>
            <img src={icon} alt="Icon" />
          </div>
        </section>
    
      </div>
     </div>

    </>
  );
}
