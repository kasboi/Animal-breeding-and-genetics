import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/form.module.css";

export default function FormInfo() {
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    graduatedYear: "",
    previousJob: "",
    currentJob: "",
    locationOrCountry: "",
    supervisor: "",
    advice: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((data) => ({
      ...data,
      [name]: value,
    }));
    // clear error when typing
    setErrors((error) => ({
      ...error,
      [name]: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(apiUrl, payload);
      alert("Form submitted successfully!");
      setPayload({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        graduatedYear: "",
        previousJob: "",
        currentJob: "",
        locationOrCountry: "",
        supervisor: "",
        advice: "",
      });
    } catch (error) {
      // error message from server
      if (error.response && error.response.data) {
        const serverErrors = error.response.data.message;
        const formErrors = {};
        Object.keys(payload).forEach((field) => {
          if (serverErrors[field]) {
            formErrors[field] = (
              <span className={styles.error}>
                {/* replace quote in error message */}
                {/* {serverErrors[field].replace(/"/g, "")} */}
                {serverErrors[field]}
              </span>
            );
          }
        });
        setErrors(formErrors);
        // error message from server
      } else {
        alert("Failed to submit form. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className={styles.main2}>
      <h1 className={styles.heading}>
        Alumni Form For The Department of Animal Breeding And Genetics
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={payload.firstName}
              onChange={handleChange}
              placeholder="Enter your firstname"
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={payload.lastName}
              onChange={handleChange}
              placeholder="Enter your lastname"
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={payload.emailAddress}
              onChange={handleChange}
              placeholder="Provide your email Address eg funaab@gmail.com"
            />
            {errors.emailAddress && <span>{errors.emailAddress}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={payload.phoneNumber}
              onChange={handleChange}
              placeholder="Provide your Phone Number eg 08168043011"
            />
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="graduatedYear">Graduated Year:</label>
            <input
              type="text"
              id="graduatedYear"
              name="graduatedYear"
              value={payload.graduatedYear}
              onChange={handleChange}
              placeholder="Enter Graduated Year eg 2023"
            />
            {errors.graduatedYear && <span>{errors.graduatedYear}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="previousJob">Previous Job:</label>
            <input
              type="text"
              id="previousJob"
              name="previousJob"
              value={payload.previousJob}
              onChange={handleChange}
              placeholder="Previous Job eg Backend software engineer"
            />
            {errors.previousJob && <span>{errors.previousJob}</span>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="currentJob">Current Job:</label>
            <input
              type="text"
              id="currentJob"
              name="currentJob"
              value={payload.currentJob}
              onChange={handleChange}
              placeholder="Current Job eg software engineer"
            />
            {errors.currentJob && <span>{errors.currentJob}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="locationOrCountry">
              Location / Country of Residence:
            </label>
            <input
              type="text"
              id="locationOrCountry"
              name="locationOrCountry"
              value={payload.locationOrCountry}
              onChange={handleChange}
              placeholder="Location / Country of Residence eg Abeokuta/Nigeria"
            />
            {errors.locationOrCountry && (
              <span>{errors.locationOrCountry}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="supervisor">Who was your supervisor?</label>
            <input
              type="text"
              id="supervisor"
              name="supervisor"
              value={payload.supervisor}
              onChange={handleChange}
              placeholder="Who was your supervisor?"
            />
            {errors.supervisor && <span>{errors.supervisor}</span>}
          </div>
        </div>
        <div>
          <label htmlFor="advice">Advice for the Department:</label>
          <textarea
            id="advice"
            name="advice"
            value={payload.advice}
            onChange={handleChange}
            placeholder="Advice for the Department"
          />
          {errors.advice && <span>{errors.advice}</span>}
        </div>
        <div className={styles.btn}>
          <button type="submit" disabled={loading}>
            {loading ? <div className={styles.loader}></div> : "SUBMIT"}
          </button>
        </div>
      </form>
    </main>
  );
}
