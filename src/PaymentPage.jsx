import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const total = location.state?.total || 0;
  const btcAddress = "bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7"; // your BTC address

  const copyAddress = () => {
    navigator.clipboard.writeText(btcAddress);
    alert("Copied to clipboard ✅");
  };

  const handlePay = () => {
    setShowModal(false);
    navigate("/thank-you");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Complete Your Payment</h1>
        <p className="text-gray-600 mb-6">
          Please pay <span className="font-bold">${total}</span> using Bitcoin
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl transition"
        >
          Pay with Bitcoin
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-96 relative">
              <h2 className="text-xl font-bold mb-4">Bitcoin Payment</h2>
              <p className="text-gray-600 mb-2">
                Send <span className="font-bold">${total}</span> to this address:
              </p>

              <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm break-all mb-4">
                {btcAddress}
              </div>

              <button
                onClick={copyAddress}
                className="mb-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
              >
                Copy Address
              </button>

              <div className="flex justify-center mb-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${btcAddress}`}
                  alt="BTC QR Code"
                  className="rounded-lg"
                />
              </div>

              <button
                onClick={handlePay}
                className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
              >
                I Have Paid
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="mt-3 w-full py-2 bg-gray-300 hover:bg-gray-400 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
