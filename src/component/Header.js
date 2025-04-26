import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <>
      <Nav className="header_sticky">
        <Navbar key="lg" expand="xxxl">
          <NavbarBrand href="/">
            <img height={50} width={150} src="../img/hl.webp" alt="Logo" />
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink className="header-navlink" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="header-navlink" href="/Product">
                Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="header-navlink" href="/Contact">
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="header-navlink" href="/About">
                About Us
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Nav>
    </>
  );
};
export default Header;
