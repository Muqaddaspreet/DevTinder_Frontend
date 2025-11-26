import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Handle login logic here
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        { withCredentials: true } // For whitelisting our domains.
      );
      console.log("Login successful", res.data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="my-2 card bg-base-300 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
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
            <button
              className="btn bg-red-500 w-full max-w-xs"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
