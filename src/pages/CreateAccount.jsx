import React from 'react';

const CreateAccount = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center space-y-8 border border-gray-200">
        {/* Logo */}
        <div className="flex items-center justify-center mb-2">
          <img
            src="/logo.png"
            alt="Legalpapers Logo"
            className="h-12 mb-2"
          />
          <img src="/legalpapers.png" alt="Logo" className="h-12" />
        </div>

        {/* Heading */}
        <h2 className="text-lg font-semibold text-brand">Create Your Account</h2>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-6 py-2 border border-gray-300 rounded-lg placeholder:text-gray-400 text-xs font-light focus:outline-none focus:ring-2 focus:ring-brand "
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-6 py-2 border border-gray-300 rounded-lg placeholder:text-gray-400 text-xs font-light focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-6 py-2 border border-gray-300 rounded-lg placeholder:text-gray-400 text-xs font-light focus:outline-none focus:ring-2 focus:ring-brand "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-6 py-2 border border-gray-300 rounded-lg placeholder:text-gray-400 text-xs font-light focus:outline-none focus:ring-2 focus:ring-brand "
          />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-brand text-white font-bold py-2 rounded-full hover:bg-light transition-colors text-sm"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
