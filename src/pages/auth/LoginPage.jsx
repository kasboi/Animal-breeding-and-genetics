import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/signup.module.css";
import { CreateAuth } from "../../components/context-api/Auth";

const Login = ({ setIsUserLoggin }) => {
  const url = "https://abg-3n55.onrender.com/api/v1/admin/login";
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  useEffect(()=> {
    let token = JSON.parse(localStorage.getItem("token"))

    if (token) {
      navigate("/admin");
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          const token = result.data.token;
          localStorage.setItem("token", JSON.stringify(token));
          navigate("/admin");
          setIsUserLoggin(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
                value={payload.email}
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
                value={payload.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.btn}>
              <button
                type="submit"
                className={styles.button}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
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
