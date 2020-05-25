import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  IoIosMenu
} from 'react-icons/io';

const Header = ({ siteTitle }) => (
  <header>
    <nav className="nav">
      <div>
        <section className="logo">

        </section>
      </div>
      <div>
        <section className="menu">
          < IoIosMenu className="icon" />
        </section>
      </div>
    </nav>
  </header>
)

export default Header
