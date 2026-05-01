import { useNavigate } from "react-router-dom";
import "./App.css";

function Landing() {
  const navigate = useNavigate();

  return (
    
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>

      <p>
        At Paradise Nursery, we bring nature closer to your home with a wide
        variety of beautiful indoor and outdoor plants.
      </p>

      <button onClick={() => navigate("/plants")}>
        Get Started
      </button>
    </div>
  );
}

export default Landing;