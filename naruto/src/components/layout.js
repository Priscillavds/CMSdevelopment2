import * as React from 'react'
import { Link } from 'gatsby'
import { container, nav, navLinks, navLinkItem, navLinkText, title } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title className={title}>{pageTitle}</title>
      <nav className={nav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/characters">
              Characters
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout