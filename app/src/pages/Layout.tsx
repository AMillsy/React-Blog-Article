import { Outlet } from "react-router-dom";

import NavComponent from "../components/navComponent";

function Layout() {
  return (
    <>
      <NavComponent></NavComponent>
      <Outlet />
    </>
  );
}

export default Layout;
