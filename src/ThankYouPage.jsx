import React from "react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-700">
          We have received your payment request.  
          Your payment will be confirmed shortly.
        </p>
      </div>
    </div>
  );
}
