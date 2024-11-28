import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <header>
        <AppMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
