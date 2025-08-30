import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function PaymentPage() {
  const location = useLocation();
  const total = location.state?.total || 0;

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Payment</h1>
      <p style={{ textAlign: "center" }}>Total amount: ${total}</p>

      {total > 0 && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h3>Choose Payment Method</h3>
          <button
            onClick={() => alert(`Please pay $${total} to this Bitcoin address:\n\n1BoatSLRHtKNngkdXEeobR76b53LETtpyT`)}
            style={{ padding: "1rem 2rem", fontSize: "1rem", margin: "1rem" }}
          >
            Pay with Bitcoin
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
