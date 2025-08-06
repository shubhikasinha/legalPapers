import React from 'react';
import Navbar from '../components/Navbar';

const Withdraw = () => {
  return (
    <div className="min-h-screen bg-white pt-24 flex flex-col items-center">
      <Navbar />

      <div className="text-center mt-14">
        <h2 className="text-2xl font-semibold text-[#2c1000]">Manage Wallet</h2>

        <h3 className="text-xl mt-4 font-bold text-[#2c1000] flex items-center justify-center gap-2">
          <img src="/rupee.png" alt="rupee" className="h-5" />
          Withdraw Money from Wallet
        </h3>

        <p className="text-md mt-6 text-[#2c1000] font-medium">
          Current Balance: <span className="font-bold">₹ xx xxx</span>
        </p>

        {/* Amount Input */}
        <div className="mt-8">
          <label className="block mb-2 text-gray-600 font-semibold">
            Enter Amount to be Withdrawn
          </label>
          <input
            type="number"
            placeholder="₹ 0.00"
            className="border border-gray-300 px-4 py-2 rounded-md w-80 text-center focus:outline-none focus:ring-2 focus:ring-[#2c1000]"
          />
        </div>

        {/* UPI/Bank Field */}
        <div className="mt-6">
          <label className="block mb-2 text-gray-600 font-semibold">
            Withdraw To ( Bank / UPI )
          </label>
          <input
            type="text"
            placeholder="Enter UPI ID or Account Number"
            className="border border-gray-300 px-4 py-2 rounded-md w-80 text-center focus:outline-none focus:ring-2 focus:ring-[#2c1000]"
          />
        </div>

        {/* Button */}
        <button
          className="mt-16 bg-[#2c1000] text-white font-bold py-2 px-10 rounded-md hover:bg-[#3d1800] transition-all"
        >
          Add Money
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
