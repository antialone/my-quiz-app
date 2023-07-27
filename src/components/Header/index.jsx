import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <Navbar expand="lg" bg="light" className="bg-body-tertiary pt-[20px]">
      <Container>
        <Navbar.Brand>Nguyễn Hưng</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/admins">
              Admin
            </NavLink>
            <NavLink className="nav-link active:to-blue-400" to="/user">
              User
            </NavLink>
          </Nav>
          <Nav>
            <button className="rounded-md h-[40px] mr-[15px] px-[15px] border-[1px] hover:bg-slate-200 ">Log in</button>
            <button className="rounded-md h-[40px] mr-[15px] px-[15px] border-[1px]  bg-slate-950 text-white hover:bg-slate-700">Sign up</button>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Log out </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
