import React from "react"
import { Container } from "./styles"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const OverlayMenu = ({ open }) => {
  return (
    <Container open={open}>
      <nav>
        <motion.ul variants={container} initial="hidden" animate="visible">
          <motion.li variants={open && item}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li variants={open && item}>
            <Link to="/">Posts</Link>
          </motion.li>
          <motion.li variants={open && item}>
            <Link to="/">About</Link>
          </motion.li>
        </motion.ul>
        <div className="separation_line"></div>
        <div className="social_media">
          <span>Follow us : </span>{" "}
          <div className="social_links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              FB
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              IG
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              YT
            </a>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default OverlayMenu
