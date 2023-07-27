import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function Admin(props) {
    const [collapsed,setCollapsed] = useState(false)
  return (
    <div className="admin-container h-[100%] flex">
      <div className="admin-sidebar h-screen">
        <SideBar collapsed = {collapsed}/>
      </div>
      <div className="admin-content w-[100%] flex flex-col">
        <div className="admin-header"></div>
        <div className="admin-main"></div>
        <FaBars onClick={()=>setCollapsed(!collapsed)} />
        <Outlet/>
      </div>
    </div>
  );
}

export default Admin;
