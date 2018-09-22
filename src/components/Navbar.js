import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/bent-logo.png'
import { LanguageConsumer } from './Context'
import { GoGlobe } from 'react-icons/go';

const Navbar = () => (
  <header>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/">
            <figure className="image">
              <img src={logo} alt="Bent Production Logo" style={{ maxHeight: "4rem", height: "4rem" }} />
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
            <Dropdown />
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
  <a role="button" href="/" className="navbar-burger" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
)

const Dropdown = () => (
  <LanguageConsumer>
    {({ language, updateLanguage, languages }) => (
      <div className="dropdown is-hoverable navbar-item has-text-grey-light is-size-5">
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{language}</span>
            <span className="icon is-small">
              <GoGlobe />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="language-menu" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item has-text-grey-light is-size-6" onClick={() => updateLanguage("en")}>
              {languages.en.full}
            </div>
            <span className="dropdown-item has-text-grey-light is-size-6" onClick={() => updateLanguage("pl")}>
              {languages.pl.full}
            </span>
          </div>
        </div>
      </div>
    )}
  </LanguageConsumer>
)

export default Navbar
