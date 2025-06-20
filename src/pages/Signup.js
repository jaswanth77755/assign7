import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    otp: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        /^\d{10}$/.test(formData.mobile)
      ) {
        // Simulate sending OTP
        Swal.fire({
          icon: "info",
          title: `OTP Sent to ${formData.mobile}`,
          text: "Use any 6-digit number for testing.",
        });
        setStep(2);
      } else {
        Swal.fire({
          icon: "warning",
          title: "Incomplete Information",
          text: "Please fill all details correctly.",
        });
      }
    } else if (step === 2) {
      if (/^\d{6}$/.test(formData.otp)) {
        setStep(3);
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid OTP",
          text: "Please enter a valid 6-digit OTP.",
        });
      }
    } else if (step === 3) {
      if (formData.password.length >= 6) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));

        Swal.fire({
          icon: "success",
          title: "Signup Successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          otp: "",
          password: "",
        });
        setStep(1);
        navigate("/login");
      } else {
        Swal.fire({
          icon: "info",
          title: "Weak Password",
          text: "Password should be at least 6 characters.",
        });
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>

      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            maxLength="10"
            style={styles.input}
          />
        </>
      )}

      {step === 2 && (
        <input
          type="text"
          placeholder="Enter OTP"
          name="otp"
          value={formData.otp}
          onChange={handleChange}
          maxLength="6"
          style={styles.input}
        />
      )}

      {step === 3 && (
        <input
          type="password"
          placeholder="Create Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
      )}

      <button onClick={handleNext} style={styles.button}>
        {step === 3 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#f84464",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
    fontWeight: "500",
  },
};

export default Signup;
