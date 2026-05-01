import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", img: "aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "snake.jpg" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering", img: "lily.jpg" },
  { id: 4, name: "Cactus", price: 8, category: "Succulents", img: "cactus.jpg" },
  { id: 5, name: "Fern", price: 12, category: "Indoor", img: "fern.jpg" },
  { id: 6, name: "Orchid", price: 25, category: "Flowering", img: "orchid.jpg" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <h2>Our Plants 🌱</h2>

      {["Succulents", "Indoor", "Flowering"].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id}>
                {plant.img}
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  disabled={isInCart(plant.id)}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;