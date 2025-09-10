export default function ThankYouPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your payment has been received successfully. We’ll start processing your order shortly.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
