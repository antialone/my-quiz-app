import "react-pro-sidebar/dist/css/styles.css";
import sidebarBg from "../../assets/bg2.jpg";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaGem, FaGithub } from "react-icons/fa";
import { DiReact } from "react-icons/Di";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function SideBar(props) {
  const { image, collapsed, toggled, handleToggleSidebar } = props;

  return (
    <div>
      <>
        <ProSidebar
          className="h-screen"
          image={sidebarBg}
          collapsed={collapsed}
          toggled={toggled}
          breakPoint="md"
          onToggle={handleToggleSidebar}
        >
          <SidebarHeader>
            <div
              style={{
                padding: "24px",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 14,
                letterSpacing: "1px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <DiReact size="30px" />
             <Link to= '/' className="no-underline text-gray-300" > Nguyễn Hưng</Link>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem icon={<MdDashboard />}>
                DashBoard
                <Link to="/admins"/>
              </MenuItem>
            </Menu>
            <Menu iconShape="circle">
              <SubMenu
                suffix={<span className="badge yellow">3</span>}
                icon={<FaGem />}
                title={"Features"}
              >
                <MenuItem>
                  Quản lý Users
                  <Link to="/admins/manage-users" />
                </MenuItem>
                <MenuItem> Quản lý Bài Quiz</MenuItem>
                <MenuItem> Quản lý Câu Hỏi</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>

          <SidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper  flex items-center justify-center"
              style={{
                padding: "20px 24px",
              }}
            >
              <div className="flex items-center justify-center flex-col gap-[5px] bg-gray-700 rounded-3xl p-[15px] w-[150px] hover:bg-gray-600">
                <FaGithub />
                <span className="whitespace-nowrap text-ellipsis overflow-hidden text-xs hover:text-zinc-200">
                  Nguyễn Hưng
                </span>
              </div>
            </div>
          </SidebarFooter>
        </ProSidebar>
      </>
    </div>
  );
}

export default SideBar;
