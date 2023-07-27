import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { useState } from "react";

function Admin(props) {
    const [collapsed,setCollapsed] = useState(false)
  return (
    <div className="admin-container  h-[100%] flex">
      <div className="admin-sidebar h-screen">
        <SideBar collapsed = {collapsed}/>
      </div>
      <div className="admin-content ">
        <FaBars onClick={()=>setCollapsed(!collapsed)} />
        Content goes here
      </div>
    </div>
  );
}

export default Admin;
