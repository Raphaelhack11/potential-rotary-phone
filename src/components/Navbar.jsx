import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>
        Shop
      </Link>
    </nav>
  );
}

export default Navbar;
