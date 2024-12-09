import "./App.css";
import CartProvider from "./pages/cart/context/CartProvider";

import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </>
  );
}

export default App;
