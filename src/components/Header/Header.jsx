import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import dumdata from "./../../data/dam_data";
import "./Header.scss";
const Header = (props) => {
  return (
    <header className="top-header">
      <div className="container">
        <div className="top-header-titlerow">
          <div className="top-header-logo">LOGO</div>
          <div className="top-header-title">
            асоціація психологічного консультування та травмотерапії
          </div>
          <div className="top-header-langnav">
            <a href="" className="active">
              UA
            </a>
            <a href="">EN</a>
          </div>
        </div>
      </div>
      <div className="top-nav">
        <div className="container">
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {dumdata.navbar.map((i) => (
                  <Nav.Link href="#home" key={i}>
                    {i}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
