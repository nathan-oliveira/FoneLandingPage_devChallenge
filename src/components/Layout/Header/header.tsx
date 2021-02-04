import React, { useState } from "react"
import { Link } from "gatsby"
import "./header.scss"
import Img from '../../Image/image'

const Header = () => {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <header className="menu">
      <div className="container">
        <nav className="menu_nav">
          <Link to="/">
            <Img name="logo" />
          </Link>
          <ul className={`item_centro ${menu ? 'item_active' : 'item_none'}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
          </ul>
          <ul className="item_direita">
            <li>
              <Img name="search" />
            </li>
            <li>
              <Img name="cart" />
            </li>
            <li onClick={toggleMenu}>
              <button className="menuIcon"></button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
