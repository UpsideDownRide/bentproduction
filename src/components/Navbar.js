import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/bent-logo.png'

const Navbar = () => (
  <header>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/">
            <figure className="image">
              <img src={logo} alt="Bent Production Logo" style={{ maxHeight: "4rem", height: "4rem" }}/>
            </figure>
          </NavLink>
          <Burger />
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

const NavLink = (props) => (
  <Link className="navbar-item has-text-grey-light is-size-5" {...props} />
)

const Burger = () => (
  <a role="button" href="/" class="navbar-burger" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
)

export default Navbar
