import { useNavigate } from "react-router-dom";

const HomeView= () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <>
      <div style={{ position: "relative", width: "100%", marginTop: "80px" }}>
        <img 
          src="src/pages/home/img/home.jpg"  
          alt="Shop"
          style={{ width: "100%", height: "auto" }}
        />
        <button 
          onClick={goToProducts} 
          style={{
            position: "absolute",
            top: "200px",    
            left: "200px",     
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Check out our products
        </button>
      </div>
    </>
  );
};
export default HomeView;