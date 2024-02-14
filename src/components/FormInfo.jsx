import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/form.module.css";

export default function FormInfo() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (Object.values(formData).some((field) => !field)) {
        alert("Please fill in all fields.");
        return;
      }
      await axios.post(
        "https://animal-breeding-and-genetics.onrender.com/api/v1/user/post",
        formData
      );
      alert("Form submitted successfully!");
      setFormData({
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
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
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
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your firstname"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your lastname"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="emailAddress">Email Address:</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Provide your email Address"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Provide your Phone Number"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="graduatedYear">Graduated Year:</label>
            <input
              type="text"
              id="graduatedYear"
              name="graduatedYear"
              value={formData.graduatedYear}
              onChange={handleChange}
              placeholder="Enter Graduated Year"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="previousJob">Previous Job:</label>
            <input
              type="text"
              id="previousJob"
              name="previousJob"
              value={formData.previousJob}
              onChange={handleChange}
              placeholder="Previous Job"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="currentJob">Current Job:</label>
            <input
              type="text"
              id="currentJob"
              name="currentJob"
              value={formData.currentJob}
              onChange={handleChange}
              placeholder="Current Job"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="locationOrCountry">
              Location / Country of Residence:
            </label>
            <input
              type="text"
              id="locationOrCountry"
              name="locationOrCountry"
              value={formData.locationOrCountry}
              onChange={handleChange}
              placeholder="Location / Country of Residence"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="supervisor">Who is your supervisor?</label>
            <input
              type="text"
              id="supervisor"
              name="supervisor"
              value={formData.supervisor}
              onChange={handleChange}
              placeholder="Who is your supervisor?"
            />
          </div>
        </div>
        <div>
          <label htmlFor="advice">Advice for the Department:</label>
          <textarea
            id="advice"
            name="advice"
            value={formData.advice}
            onChange={handleChange}
            placeholder="Advice for the Department"
          />
        </div>
        <div className={styles.btn}>
          <button type="submit" disabled={loading}>
            {loading ? (
              <div className={styles.loader}></div>
            ) : (
              "SUBMIT"
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
