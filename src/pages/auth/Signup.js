import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/signup.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CreateAuth } from '../../components/context-api/Auth';

const Signup = ({updateStatus,active,setActive}) => {

    const url = "http://localhost:2028/api/v1/admin/signup";

    // const url = "https://abg-3n55.onrender.com/api/v1/admin/signup";
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, formData);
            console.log('Response:', response.data.data);
         
        } catch (error) {
            console.error('Error:', error);
        }
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
                            <button type="submit" className={styles.button}>Signup</button>
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
