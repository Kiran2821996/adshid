import logo from "./logo.svg";

import React, { useState } from "react";
import axios from "axios";
function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",

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
                url: "/auth/login",
                baseURL: "https://abhishad.onrender.com/api",
                method: "post",
                header: { "Content-type": "application/json" },
                data: {
                    email: formData.email,
                    password: formData.password,

                },
            };

            let response = await axios(config);
         
            if (response.status === 200) {
                alert("Logged in  Succesfully");
                window.location.assign("dashboard")
            }
        } catch (error) {
            console.error("error", error);
        }
    };
    return (
        <div className="form-container">
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

            <div className="form-input">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                {formErrors.password && (
                    <p className="error-message">{formErrors.password}</p>
                )}
            </div>
            

            <button onClick={handleSubmit} className="submit-btn">
                Login
            </button>
            <div className="row text-center">
            <a href="/register">If not Registered? go with signup</a>
            </div>
        </div>
    );
}

export default Login;
