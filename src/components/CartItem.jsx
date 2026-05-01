import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, decreaseQty, removeItem } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3>Total Items: {cart.length}</h3>
      <h3>Total Cost: ${totalCost}</h3>

      {cart.map(item => (
        <div key={item.id}>
          {item.img}
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
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