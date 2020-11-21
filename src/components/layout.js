import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import NoShow from './NoShow'
import TopBar from '../components/TopBar'
import MobileMenu from '../components/MobileMenu'
import "../App.scss"

const Layout = ({ children, page, modalToggled }) => {
  const [menuToggled, setMenuToggled] = useState(false)
  const handleMenuToggle = () => setMenuToggled(!menuToggled)

  useEffect(() => {
    const body = document.querySelector('body')
    if (menuToggled || modalToggled) {
      body.style.overflow = 'hidden'
    }

    if (!menuToggled && !modalToggled) {
      body.style.overflow = 'auto'
    }
  }, [menuToggled, modalToggled])

  return (
    <div className={`app`}>
      <div className='app__inner'>
        <TopBar modalToggled={modalToggled} handleMenuToggle={handleMenuToggle} />
        <main className={`main main__content main__${page}`}>
          {children}
        </main>
        <MobileMenu menuToggled={menuToggled} handleMenuToggle={handleMenuToggle} />
      </div>
      <NoShow />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
