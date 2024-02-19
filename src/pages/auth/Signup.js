import React, { useEffect, useState } from 'react';
import styles from '../../styles/signup.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    // const url = "https://abg-3n55.onrender.com/api/v1/admin/signup";
    const [payload, setPayload] = useState({
        email: '',
        password: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({ ...payload, [name]: value });
    };
    const url = "https://abg-3n55.onrender.com/api/v1/admin/signup";
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
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.status === 'success') {
                    navigate('/auth/otp')

                }
            }).catch((error) => {
                console.error("Error:", error);
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });

    };

    return (
        <>
            <main className={styles.main1}>
                <div className={styles.container}>
                    <h2>Signup</h2>
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
                            <button type="submit" className={styles.button} disabled={loading}>
                                {loading ? "Loading.." : "Login"}
                            </button>
                        </div>
                        <div>
                            Already have an account ? <Link to={'/auth/login'}> Login</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Signup;
