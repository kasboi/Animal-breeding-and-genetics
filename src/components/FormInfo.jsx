import React from "react";
import styles from "../styles/form.module.css";
export default function FormInfo() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        Alumni Form For The Department of Animal Breeding And Genetics
      </h1>
      <form action="">
        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="first-name">First Name:</label>
            <input
              placeholder="Enter your firstname"
              type="text"
              id="first-name"
              name="first-name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="last-name">Last Name:</label>
            <input
              placeholder="Enter your lastname"
              type="text"
              id="last-name"
              name="last-name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Email">Email Address</label>
            <input
              placeholder="Provide your email Address"
              type="text"
              id="Email"
              name="email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="number">Phone Address</label>
            <input
              placeholder="Provide your Phone Number"
              type="text"
              id="number"
              name="number"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="year">Graduated Year</label>
            <input
              type="text"
              placeholder="Enter Graduated Year"
              id="year"
              name="year"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="previous">Previous Job </label>
            <input
              type="text"
              placeholder="Previous Job"
              id="previous"
              name="previous"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="current">Current Job</label>
            <input type="text" id="current" name="current" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="location">Location / Country of Residence</label>
            <input
              placeholder="Location / Country of Residence"
              type="text"
              id="location"
              name="location"
            />
          </div>
        </div>
        <div>
          <label htmlFor="advice">
            Advice for the Department
          </label>
          <textarea
            placeholder="Advice for the Department"
            type="text"
            id="advice"
            name="advice"
          />
        </div>
        <div className={styles.btn}>
            <button>SUBMIT</button>
        </div>
      </form>
    </main>
  );
}
