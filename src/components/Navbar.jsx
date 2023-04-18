import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = ({ setSearchQuery, searchQuery }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <nav className="navbar full-width">
      <Link to="/" className="site-title">
        Legacy
      </Link>

      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Søk etter produkt"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            value={searchQuery}
          />
        </div>
      </div>

      <ul className="menu-list">
        <CustomLink to="/cart" className="menu-cart">
          <BsFillCartFill />
          <span
            id="count"
            className="count"
          >{`${totalAmount} kr - ${totalQuantity} stk`}</span>
        </CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
