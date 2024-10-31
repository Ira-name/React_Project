import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu";
const Layout = () => {
  return (
    <>
      <header>
        <AppMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
