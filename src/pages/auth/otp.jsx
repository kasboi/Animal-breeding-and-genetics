import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/otp.module.css";
// import logo from "../../assets/images/logo.svg";
// import back from "../../assets/images/backarrow.svg";
// import email from "../../assets/images/mail.svg";
import { useNavigate } from "react-router-dom";
const OTPConfirmationPage = () => {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate("/auth/signup");
  };
  const [otp, setOTP] = useState(["", "", "", ""]);
  const otpFields = useRef([]);
  const [otpTimeout, setOtpTimeout] = useState(45);
  const [Resend, setResend] = useState(true);
  const handleChange = (index, e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value && index < otp.length - 1) {
        otpFields.current[index + 1].focus();
      }
    }
  };
  useEffect(() => {
    let timer;
    if (otpTimeout > 0 && !Resend) {
      timer = setTimeout(() => {
        setOtpTimeout((prevTimeout) => prevTimeout - 1);
      }, 1000);
    } else {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [otpTimeout, Resend]);

  const handleResendOtp = () => {
    setOtpTimeout(45);
    setResend(false);
  };
  const timeFormat = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("");
    console.log(enteredOTP);
  };

  return (
    <>
     <div className={styles.div}>
     <section className={styles.main1}>
        <div className={styles.heading}>
          <div className={styles.logoContainer}>
            {/* <img src={logo} alt="logo" /> */}
          </div>
          <div onClick={handleNavigateBack} className={styles.navigation}>
            {/* <img src={back} alt="logo" /> */}
            <div>Go Back to Login</div>
          </div>
        </div>

        <div className={styles.centerContent}>
          <div className={styles.content}>
            {/* <img src={email} alt="" /> */}
            <h1>Kindly Enter the OTP to verify your Account</h1>
            <p>
              Please take a moment to check your email address. We sent an email
              with an OTP to
              <span className={styles.email}> makindeolaitan01@gmail.com</span>. If
              you can’t find it in your Inbox, check your spam folder
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formcontainer}>
              {otp.map((digit, index) => (
                <input
                  className={styles.input}
                  key={index}
                  type="text"
                  value={digit}
                  onFocus={(e) => (e.target.style.outline = "none")}
                  onChange={(e) => handleChange(index, e)}
                  maxLength="1"
                  ref={(el) => (otpFields.current[index] = el)}
                />
              ))}
            </div>
            <div className={styles.btn}>
              <button type="submit">Verify OTP</button>
            </div>
            <div className={styles.resend}>
              {otpTimeout > 0 ? (
                <p>
                  Didn’t receive an OTP? Resend in
                  <span className={styles.timer}>{timeFormat(otpTimeout)}</span>
                </p>
              ) : (
                <button onClick={handleResendOtp} disabled={!Resend}>
                  Resend OTP
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
     </div>
    </>
  );
};

export default OTPConfirmationPage;
