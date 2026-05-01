import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";






const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 20, img: "🌿" },
    { id: 2, name: "Peace Lily", price: 25, img: "🌱" },
    { id: 3, name: "Aloe Vera", price: 15, img: "🌵" },
    { id: 4, name: "Spider Plant", price: 18, img: "🌿" },
    { id: 5, name: "Fern", price: 22, img: "🌿" },
    { id: 6, name: "ZZ Plant", price: 30, img: "🌱" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 10, img: "🌹" },
    { id: 8, name: "Tulip", price: 12, img: "🌷" },
    { id: 9, name: "Lavender", price: 14, img: "💜" },
    { id: 10, name: "Sunflower", price: 16, img: "🌻" },
    { id: 11, name: "Jasmine", price: 18, img: "🌼" },
    { id: 12, name: "Daisy", price: 11, img: "🌼" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    
    <div>
      <h2>Our Plants</h2>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>

          {items.map((plant) => (
            <div key={plant.id}>
              <p>{plant.img}</p>
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button
                onClick={() => dispatch(addItem(plant))}
                disabled={isInCart(plant.id)}
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