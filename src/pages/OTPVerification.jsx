import React, { useState, useRef, useEffect } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (element, index) => {
    if (isNaN(Number(element.value))) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to next
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    setCountdown(30);
    setOtp(Array(6).fill(""));
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen bg-[#f8f5f1] text-[#2a231f] flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center bg-white p-8 shadow-xl rounded-2xl">
        {/* Header */}
        <div className="mb-10">
          <img src="/legalpapers.png" alt="Logo" className="mx-auto mb-2 h-12" />
          <p className="font-bold text-sm text-[#6c6159]">Get Your Legal Documents Online</p>
        </div>

        {/* OTP Section */}
        <h2 className="text-xl font-bold mb-6">OTP Verification</h2>
        <p className="text-sm text-[#8b8178] mb-1">Enter the 6-digit code sent to</p>
        <p className="font-bold text-sm text-gray-600 mb-6">+91 98765 43210</p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputRefs.current[idx] = el)}
              onChange={(e) => handleChange(e.target, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="w-12 h-12 border-2 border-dark text-center rounded-lg text-xl font-medium focus:outline-none focus:ring-2 focus:ring-light"
              autoFocus={idx === 0}
            />
          ))}
        </div>

        {/* Resend */}
        <div className="text-sm text-[#8b8178] font-bold mb-6">
          {countdown > 0 ? (
            <span>Resend OTP in {countdown} seconds</span>
          ) : (
            <button
              onClick={handleResendOTP}
              className="text-[#8e4b2f] hover:underline font-semibold"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Verify */}
        <button
          onClick={() => {
            const otpValue = otp.join("");
            if (otpValue.length === 6) {
              console.log("OTP:", otpValue);
              // Add actual verification logic here
            }
          }}
          className="w-full py-3 rounded-full text-white bg-brand hover:bg-light font-bold transition-all"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
