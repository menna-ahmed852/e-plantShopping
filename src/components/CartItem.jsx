import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  decreaseQuantity,
  removeItem
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

<Navbar />

function CartItem() {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalAmount = (cart) =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalCost = calculateTotalAmount(cart);

  return (
    <div>
      <Navbar />
      <h2>Shopping Cart</h2>

      <h3>Total Items: {cart.length}</h3>
      <h3>Total Cost: ${totalCost}</h3>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.img}</p>
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => navigate("/plants")}>
        Continue Shopping
      </button>

      <button onClick={() => alert("Coming Soon!")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;


