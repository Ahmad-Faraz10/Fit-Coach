import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = () => {
  return (
    <>
      <Nav className="header_sticky header">
        <Navbar key="lg" expand="lg">
          <NavbarBrand href="/">
            <img height={40} width={150} src="../img/hl.webp" alt="Logo" />
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
