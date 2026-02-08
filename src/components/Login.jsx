import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false); // State to toggle between login and signup forms
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Handle login logic here
    try {
      const res = await axios.post(
        BASE_URL + "/login", // Using BASE_URL from constants
        {
          email,
          password,
        },
        { withCredentials: true }, // For whitelisting our domains.
      );
      console.log("Login successful", res?.data?.user);
      dispatch(addUser(res?.data?.user)); // Dispatch an action to add user to Redux store
      return navigate("/"); // Navigate to home page after login
    } catch (error) {
      setError(error?.response?.data || "Login failed");
      console.error("Login failed", error);
    }
  };

  const handleSignup = async () => {
    try {
      // Handle signup logic here
      const res = await axios.post(
        BASE_URL + "/signup", // Using BASE_URL from constants
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }, // For whitelisting our domains.
      );
      console.log("Signup successful", res?.data?.user);
      setIsLoginForm(true); // Switch to login form after successful signup
    } catch (error) {
      setError(error?.response?.data || "Signup failed");
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="my-2 card bg-base-300 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{isLoginForm ? "Login" : "Sign Up"}</h2>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs mb-2"
            hidden={isLoginForm} // Hide first name field in login form
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs mb-2"
            hidden={isLoginForm} // Hide last name field in login form
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="input input-bordered w-full max-w-xs mb-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="input input-bordered w-full max-w-xs mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="card-actions justify-center w-full">
            <p className="text-red-600">{error}</p>
            <button
              className="btn bg-red-500 w-full max-w-xs"
              onClick={isLoginForm ? handleLogin : handleSignup} // Call appropriate handler based on form type
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>
          <p className="mt-2 text-lg">
            {isLoginForm
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsLoginForm(!isLoginForm)} // Toggle form on click
            >
              {isLoginForm ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
