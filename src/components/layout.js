import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import NoShow from './NoShow'
import Footer from './Footer'
import Div100vh from 'react-div-100vh'
import TopBar from '../components/TopBar'
import MobileMenu from '../components/MobileMenu'
import "../App.scss"

const Layout = ({ children, page, modalToggled }) => {
  const [menuToggled, setMenuToggled] = useState(false)

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const handleMenuToggle = () => setMenuToggled(!menuToggled)

  useEffect(() => {
    const body = document.querySelector('body')
    if (menuToggled) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }
  }, [menuToggled])

  return (
    <div className={`app ${menuToggled && 'no-scroll'}`}>
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
