import { useNavigate } from "react-router-dom";
import "../css/home.css";
const HomeView = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="home">
        <img src="./home.jpg" alt="Shop" className="home-img" />
        <button onClick={goToProducts} className="button-home">
          Check out our products
        </button>
      </div>
    </>
  );
};
export default HomeView;
