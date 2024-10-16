import React from "react";
import parkingImage from "../assets/lab.jpeg";

const Welcome = () => {
  return (
    <div
      className="text-center relative py-16"
      style={{
        backgroundImage: `url(${parkingImage})`, // Using the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh", // Adjust height as needed
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold text-white">
          Welcome to LAB-Parking
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Your convenient solution for hassle-free parking. Reserve your spot
          today!
        </p>
        <button className="mt-8 bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Reserve a Spot
        </button>
      </div>
    </div>
  );
};

export default Welcome;
