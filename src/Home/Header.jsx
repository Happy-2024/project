import React, { useContext, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Assests/logo.png";
import search from "../Assests/search.png";
import account from "../Assests/Account.png";
import heart from "../Assests/heart.png";
import Cart from "../Assests/Cart.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Cartcontext"; // Adjust the path if needed

const Header = () => {
  const navigate = useNavigate();
  const { cartCount, wishlistCount } = useContext(CartContext);
  const [expanded, setExpanded] = useState(false);

  const gotoCondition = () => {
    navigate(`/hairconditioners`);
  };

  const gotoHome = () => {
    navigate(`/home`);
  };

  const gotoPage = (product) => {
    localStorage.setItem("productDetails", product?.product_details?.featured_image);
    localStorage.setItem("salesPrice", product?.product_details?.sales_price);
    navigate(`/product/${product?.product_details?.id}`);


  };
  const gotoLoginPage = () => {
    navigate(`/login`);
  };
  return (
    <div className="header-container">
      {/* Icons Section */}
      <div className="d-flex justify-content-evenly align-items-center p-3">
        <div className="left-icons">
          <div className="d-flex align-items-center search">
            <img src={search} alt="Search" className="icon" />
            &nbsp;&nbsp;
            <p className="mb-0 See">Search</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              src={account}
              alt="Account"
              className="icon"
              onClick={gotoLoginPage}
            />
            &nbsp;&nbsp;
            <p className="mb-0 See">Account</p>
          </div>
        </div>
        <div className="logo-container ">
          <img src={logo} alt="Logo" />
        </div>
        <div className="right-icons">
          <div className="d-flex align-items-center position-relative">
            <img src={heart} alt="Wishlist" className="icon wishlist" />
            <div className="icon-indicator">{wishlistCount}</div>
            <p className="mb-0 See">Wishlist</p>
          </div>
          <div className="d-flex align-items-center position-relative">
            <div className="icon-indicators">{cartCount}</div>
            <img
              src={Cart}
              alt="Cart"
              className="icon cart"
              onClick={gotoPage}
            />
            <p className="mb-0 See">Cart</p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        expand="lg"
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler "
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="ml-auto">
            <Nav.Link onClick={gotoHome}>Home</Nav.Link>
            <Nav.Link href="#all-products">All products</Nav.Link>
            <NavDropdown title="Conditioners & others" id="basic-nav-dropdown">
              <NavDropdown.Item href="#hair-serum">Hair Serum</NavDropdown.Item>
              <NavDropdown.Item onClick={gotoCondition}>
                Hair Conditioners
              </NavDropdown.Item>
              <NavDropdown.Item href="#hair-dye">Hair Dye</NavDropdown.Item>
              <NavDropdown.Item href="#hair-mask">Hair Mask</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#shampoo-oil">Shampoo & Oil</Nav.Link>
            <Nav.Link href="#face-care">Face Care</Nav.Link>
            <Nav.Link href="#body-health">Body & Health</Nav.Link>
            <Nav.Link href="#eye-lip">Eye & Lip</Nav.Link>
            <Nav.Link href="#foot-care">Foot Care</Nav.Link>
            <Nav.Link href="#baby-care">Baby Care</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
