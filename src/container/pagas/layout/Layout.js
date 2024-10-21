import React from "react";

import Sidebar from "../../../components/defaultLayout/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Index from "../../../components/Index";

const Layout = () => {
  return (
    <Index.Box className="layout-main-container">
    <Index.Box className="sidebar-container">
      <Sidebar />
    
    </Index.Box>
    <Index.Box className="outlet-container">
      <Outlet />
    </Index.Box>
  </Index.Box>
  
  );
};

export default Layout;
