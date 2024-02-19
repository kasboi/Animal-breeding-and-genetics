import React, { useState } from "react";
import styles from "../../../styles/single.module.css";
export default function SingleMail({ onClose }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    console.log(
      "Sending email with subject:",
      subject,
      "and message:",
      message
    );

    onClose();
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.heading}>
          <p>  Email to certifiedloaded@gmail.com</p>
          <span  className={styles.closeButton} onClick={onClose}>
          &times;
          </span>
        </div>
        <div className={styles.body}>
          <div className={styles.inputContainer}>
            <label htmlFor=""> 🚀 From Makinde@gmail.com</label>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Subject" />
          </div>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <div className={styles.btn}>
            <button onClick={handleSendEmail}>Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}
