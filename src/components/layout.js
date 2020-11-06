import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Background from './Background'
import NoShow from './NoShow'
import Div100vh from 'react-div-100vh'
import TopBar from '../components/TopBar'
import "../App.scss"

const Layout = ({ children, page, modalToggled }) => {
  const [init, setInit] = useState(false)
  const [menuToggled, setMenuToggled] = useState(false)
  const [logoBorder, setLogoBorder] = useState('color-2')
  const changeBorderColor = color => setLogoBorder(color)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleMenuToggle = () => setMenuToggled(!menuToggled)

  useEffect(() => {
    if (!init) setInit(true)
  }, [])

  return (
    <Div100vh className='app'>
      <Background changeColor={changeBorderColor} init={init} page={page} />
      <div className='app__inner'>
        <TopBar modalToggled={modalToggled} handleMenuToggle={handleMenuToggle} />
        <main className={`main main__content main__${page}`}>{children}</main>
      </div>
      <NoShow />
    </Div100vh>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
