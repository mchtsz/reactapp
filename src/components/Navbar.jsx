import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";
import './Navbar.css'



const Navbar = ({setSearchQuery, searchQuery}) => {
  return (
    <nav className="navbar full-width">
      <Link to="/" className="site-title">Legacy</Link>
    
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search for product" 
          onChange={
            (e)=> {
              setSearchQuery(e.target.value) 
            }} 
            value={searchQuery}/>
        </div>
      </div>

      <ul className="menu-list">
        <CustomLink to="/cart" className="menu-cart"><BsFillCartFill/><span>0</span></CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar