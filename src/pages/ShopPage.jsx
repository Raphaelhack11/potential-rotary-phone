import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "White Vest", image: "/images/vest-white.jpg", price: 100 },
  { id: 2, name: "Red Liner Vest", image: "/images/vest-red-liner.jpg", price: 100 },
  { id: 3, name: "Black Vest", image: "/images/vest-black.jpg", price: 100 },
  { id: 4, name: "Black Vest 2", image: "/images/vest-black-2.jpg", price: 100 },
  { id: 5, name: "Camo Vest", image: "/images/vest-camo.jpg", price: 100 },
  { id: 6, name: "Red Beanie", image: "/images/beanie-red.jpg", price: 100 },
  { id: 7, name: "Black Beanie", image: "/images/beanie-black.jpg", price: 100 },
  { id: 8, name: "Pitbull Hoodie", image: "/images/hoodie-pitbull-front.jpg", price: 100 },
  { id: 9, name: "81 Hoodie", image: "/images/hoodie-81-back.jpg", price: 100 },
  { id: 10, name: "81 White T-shirt", image: "/images/tshirt-81-white.jpg", price: 100 },
  { id: 11, name: "One Percent Black T-shirt", image: "/images/tshirt-onepercent-black.jpg", price: 100 }
];

function ShopPage() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (product, checked) => {
    if (checked) {
      setSelected([...selected, product]);
    } else {
      setSelected(selected.filter((p) => p.id !== product.id));
    }
  };

  const handlePay = () => {
    const total = selected.reduce((sum, p) => sum + p.price, 0);
    navigate("/payment", { state: { total } });
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Crypto Shop</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", padding: "1rem" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={handleSelect} />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button onClick={handlePay} style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
          Pay
        </button>
      </div>
    </div>
  );
}

export default ShopPage;
