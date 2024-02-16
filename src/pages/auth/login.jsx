import React, { useState } from 'react';
import styles from '../../styles/signup.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
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
                            <button type="submit" className={styles.button}>Login</button>
                        </div>
                        <div>
                           <Link to={'/auth/login'}>Forget password </Link>
                        </div>

                    </form>
                </div>
            </main>
        </>
    );
};

export default Login;