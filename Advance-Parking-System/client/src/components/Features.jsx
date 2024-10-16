import React from "react";

const Features = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-center text-blue-900">
        Our Features
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-blue-700">Easy Reservations</h3>
          <p className="mt-2 text-gray-600">
            Quickly reserve your parking spot online without any hassle.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-blue-700">Secure Payment</h3>
          <p className="mt-2 text-gray-600">
            Enjoy secure payment options for a worry-free experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-blue-700">24/7 Support</h3>
          <p className="mt-2 text-gray-600">
            Our support team is here to assist you whenever you need help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
