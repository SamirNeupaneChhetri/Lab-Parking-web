import React, { useState } from "react";
import api from "../services/api"; // Import the api service
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await api.signup(name, email, password); // Call the signup function with name
      setMessage(result.message);
      // Reset form fields
      setName(""); // Reset name
      setEmail("");
      setPassword("");
      // Navigate to home route after successful signup
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      setMessage(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
