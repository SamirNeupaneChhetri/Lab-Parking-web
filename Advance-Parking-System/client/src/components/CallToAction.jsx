import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-blue-700 text-white text-center py-16">
      <h2 className="text-3xl font-semibold">Join Us Today!</h2>
      <p className="mt-4 text-lg">
        Experience the best parking solution tailored just for you.
      </p>
      <button className="mt-8 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </section>
  );
};

export default CallToAction;
