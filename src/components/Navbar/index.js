import React from "react"
import { Link } from "gatsby"
import { Container, Line1 } from "./styles"
import SearchBar from "../../components/SearchBar"

const Navbar = ({ handler, articles, open }) => {
  return (
    <Container>
      <div className="left_content">
        <div className="logo">
          <Link to="/">
            <span>
              Mugentage<span className="point">.</span>
            </span>
          </Link>
          <h5>
            <span>Artistic expressions</span>
          </h5>
        </div>
        <div className="search">
          <SearchBar articles={articles} />
        </div>
      </div>
      <div className="right_content">
        <div className="social_media">
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

        <div
          onClick={handler}
          onKeyPress={handler}
          role="button"
          tabIndex="0"
          className="burger_menu"
        >
          <Line1 className="line1" open={open} />
          <div className="line2"></div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
