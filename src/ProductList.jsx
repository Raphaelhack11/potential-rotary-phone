import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "White Vest", price: 100, image: "/images/vest-white.jpg" },
  { id: 2, name: "Red Liner Vest", price: 100, image: "/images/vest-red-liner.jpg" },
  { id: 3, name: "Black Vest", price: 100, image: "/images/vest-black.jpg" },
  { id: 4, name: "Black Vest 2", price: 100, image: "/images/vest-black-2.jpg" },
  { id: 5, name: "Camo Vest", price: 100, image: "/images/vest-camo.jpg" },
  { id: 6, name: "Red Beanie", price: 100, image: "/images/beanie-red.jpg" },
  { id: 7, name: "Black Beanie", price: 100, image: "/images/beanie-black.jpg" },
  { id: 8, name: "Pitbull Hoodie (Front)", price: 100, image: "/images/hoodie-pitbull-front.jpg" },
  { id: 9, name: "81 Hoodie (Back)", price: 100, image: "/images/hoodie-81-back.jpg" },
  { id: 10, name: "81 White T-Shirt", price: 100, image: "/images/tshirt-81-white.jpg" },
  { id: 11, name: "1% Black T-Shirt", price: 100, image: "/images/tshirt-onepercent-black.jpg" },
];

export default function ProductList() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const total = selected.length * 100;

  const handlePay = () => {
    navigate("/payment", { state: { total } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">🛍️ Our Store</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-3">${product.price}</p>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selected.includes(product.id)}
                  onChange={() => toggleSelect(product.id)}
                  className="w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
                />
                <span>Select</span>
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Footer with Total + Pay */}
      <div className="mt-10 text-center">
        <p className="text-xl font-semibold mb-4">
          Total: <span className="text-green-600">${total}</span>
        </p>
        <button
          onClick={handlePay}
          disabled={selected.length === 0}
          className={`px-8 py-3 rounded-xl text-white font-semibold transition ${
            selected.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
