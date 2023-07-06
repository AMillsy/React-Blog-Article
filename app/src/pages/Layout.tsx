import { Outlet } from "react-router-dom";

import NavComponent from "../components/navComponent";

function Layout() {
  return (
    <>
      <NavComponent></NavComponent>
      <Outlet />

      <footer>Designed by Adam Mills</footer>
    </>
  );
}

export default Layout;
