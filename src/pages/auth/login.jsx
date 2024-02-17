import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/signup.module.css";

const Login = () => {
  const url = "http://localhost:2028/api/v1/admin/login";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, formData);
      const { token } =response.data.data;
      if (!token) {
        console.error("Token not found in response:", response.data);
        return;
      }
      console.log("Token:", token);
      localStorage.setItem("token", token);
      navigate("/admin");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <>
      <main className={styles.main1}>
        <div className={styles.container}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.btn}>
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
            <div>
              <Link to={"/auth/login"}>Forget password </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
