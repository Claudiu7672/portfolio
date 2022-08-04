import React from "react"
import logo from "../assets/images/logo-cancer-96.png"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
import { FiAlignRight } from "react-icons/fi"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="web dev" />
          </a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FiAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
