import React from "react";
import styles from "../../styles/loading.module.css";
export default function Loading() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.loader}></div>
      </div>
    </>
  );
}
