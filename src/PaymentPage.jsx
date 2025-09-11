import React, { useState } from "react";
import { Copy } from "lucide-react"; // icon
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const btcAddress = "bc1qexampleaddress1234567890";

  const copyAddress = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Complete Your Payment</h1>
        <p className="text-gray-600 mb-6">
          Send Bitcoin to the address below to finalize your order.
        </p>

        <div className="bg-gray-50 border rounded-xl p-4 mb-6">
          <p className="font-mono text-sm break-all">{btcAddress}</p>
          <button
            onClick={copyAddress}
            className="mt-3 inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
          >
            <Copy size={16} className="mr-2" />
            {copied ? "Copied!" : "Copy Address"}
          </button>
        </div>

        <button
          onClick={() => navigate("/thank-you")}
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition"
        >
          I’ve Paid
        </button>
      </div>
    </div>
  );
}
