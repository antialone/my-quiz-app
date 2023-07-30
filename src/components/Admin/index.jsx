import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Admin(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container h-[100%] flex">
      <div className="admin-sidebar h-screen">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content w-[100%] flex flex-col">
        <div className="admin-header">
          <FaBars onClick={() => setCollapsed(!collapsed)} />
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Admin;
