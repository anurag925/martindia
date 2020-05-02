import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" >
      <NavbarBrand>
      <img
        src="../media/icon/company.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{" "}
        MartIndia
      </NavbarBrand>
    </Navbar>
  );
};

export default Navigation;