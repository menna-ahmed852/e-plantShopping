import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector(state => state.cart.cartItems);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">Cart 🛒 ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;