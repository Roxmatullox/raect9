import { NavLink } from "react-router-dom"

import "./header.css"

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="nav-link" to="/" >
          Categories
        </NavLink>
        <NavLink className="nav-link" to="/products" >
          Products
        </NavLink>
      </nav>
    </header>
  )
}

export default Header