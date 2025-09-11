import React, { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PaymentPage() {
  const [method, setMethod] = useState("");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get total from navigation state (sent from shop page)
  const total = location.state?.total || 0;

  const btcAddress = "bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method first.");
      return;
    }
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Payment Page
        </h1>

        <p className="text-center text-gray-600 mb-4">
          Please complete your payment to proceed.
        </p>

        {/* Total Amount */}
        <div className="mb-6 text-center">
          <span className="text-lg font-semibold text-gray-700">
            Total: ${total}
          </span>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Choose Payment Method
          </label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">-- Select Method --</option>
            <option value="bitcoin">Bitcoin</option>
          </select>
        </div>

        {/* BTC Details */}
        {method === "bitcoin" && (
          <div className="bg-gray-50 border rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 mb-2">
              Please send <span className="font-semibold">${total}</span> worth
              of BTC to the address below:
            </p>

            <div className="flex items-center bg-white border rounded-lg px-3 py-2">
              <span className="text-xs sm:text-sm break-all text-gray-800">
                {btcAddress}
              </span>
              <button
                onClick={copyToClipboard}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                <Copy size={18} />
              </button>
            </div>

            {copied && (
              <div className="flex items-center text-green-600 text-sm mt-2">
                <CheckCircle2 size={16} className="mr-1" />
                Address copied!
              </div>
            )}
          </div>
        )}

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Pay
        </button>
      </div>
    </div>
  );
        }
