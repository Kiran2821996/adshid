import logo from "./logo.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async () => {
  
    try {
      const config = {
        url: "/auth/register",
        baseURL: "http://localhost:8000/api",
        method: "post",
        header: { "Content-type": "application/json" },
        data: {
          email: formData.email,
          password: formData.password,
          username: formData.username,
        },
      };

      let response = await axios(config);

      if (response.status === 200) {
        alert("Registered   Succesfully");
        window.location.assign("/")
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  const [showpassword, setshowpassword] = useState(false);
  return (
    <div className="form-container">
      <div className="form-input">
        <label htmlFor="email">User Name</label>
        <input
          id="name"
          name="username"
          type="text"
          autoComplete="off"
          required
          value={formData.username}
          onChange={handleInputChange}
        />
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}
      </div>
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="off"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <p className="error-message">{formErrors.email}</p>
        )}
      </div>

      <div className="form-input" >
        <label htmlFor="password">Password</label>
      
          <input style={{ position: "relative" }}
            id="password"
            name="password"
            type={!showpassword ? "password" : "text"}
            value={formData.password}
            onChange={handleInputChange}
          />
        
        {!showpassword ? (
          <AiOutlineEyeInvisible
            onClick={() => setshowpassword(true)}
            style={{ position: "absolute", bottom: "58%", right: "38%" }}
          />
        ) : (
          <BsEye
            onClick={() => setshowpassword(false)}
            style={{ position: "absolute", bottom: "58%", right: "38%" }}
          />
        )}

        {formErrors.password && (
          <p className="error-message">{formErrors.password}</p>
        )}
      </div>

      <button onClick={handleSubmit} className="submit-btn">
        Register
      </button>
    </div>
  );
}

export default Register;
