function ProductCard({ product, onSelect }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <input 
        type="checkbox" 
        onChange={(e) => onSelect(product, e.target.checked)} 
      />
    </div>
  );
}

export default ProductCard;
