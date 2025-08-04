import React from 'react'

const Start = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f1] text-[#2a231f] flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center bg-white p-8 shadow-xl rounded-2xl">
        {/* Header */}
        <div className="mb-10">
          <img src="/legalpapers.png" alt="Logo" className="mx-auto mb-2 h-12" />
          <p className="font-bold text-sm text-[#6c6159]">Get Your Legal Documents Online</p>
        </div>

        <img src="/load.png" alt="img" className="mx-auto mb-2 h-18" />

        <h2 className="text-base font-bold mb-6">Let's Get Started</h2>

        {/* Inputs */}
        <div className="flex justify-center gap-2 mb-6">
            <input
            type="tel"
            placeholder="Enter Your Phone Number"
            className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg placeholder:text-gray-400 text-sm font-medium focus:outline-none focus:ring focus:ring-brand "/>
        </div>

        {/* SignIn */}
        <button
          className="w-full py-1 rounded-full text-white bg-brand hover:bg-light font-bold transition-all text-sm">
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Start
