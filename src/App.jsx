import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />        {/* make landing the home page */}
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />  {/* optional about route */}
      </Routes>
    </>
  );
}

export default App;