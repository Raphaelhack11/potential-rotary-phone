import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
