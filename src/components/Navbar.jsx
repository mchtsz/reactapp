import React, { useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import CartContext from "../CartContext";
import { useContext } from "react";
import "./Navbar.css";

const Navbar = ({ setSearchQuery, searchQuery }) => {
  let cartCount = 0;
  const { items } = useContext(CartContext);

  useEffect(() => {
    items.map((item) => {
      cartCount += item.amount;
    });
  }, [items]);

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
          <span id="count">{cartCount}</span>
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
