import React, { useState, useEffect } from "react"
import useArticleQuery from "../hooks/useArticlesQuery"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OverlayMenu from "../components/OverlayMenu"
import { GlobalStyle } from "../globalStyle"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const data = useArticleQuery()
  const { allWpPost } = data

  const handleOverlayMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <GlobalStyle />
      <OverlayMenu open={open} />

      <header>
        <Navbar handler={handleOverlayMenu} articles={allWpPost} open={open} />
      </header>

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
