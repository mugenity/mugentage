import React, { useRef } from "react"
import useInstagramQuery from "../../hooks/useInstagramQuery"
import { getImage } from "gatsby-plugin-image"
import { Container, StyledImage } from "./styles"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import leftArrow from "../../Images/left-arrow.svg"
import rightArrow from "../../Images/right-arrow.svg"

const InstagramFeed = () => {
  const data = useInstagramQuery()
  const { allInstagramContent } = data
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const sliderRef = useRef()

  const nextSlide = () => {
    sliderRef.current.slickNext()
  }
  const prevSlide = () => {
    sliderRef.current.slickPrev()
  }

  return (
    <Container>
      <div className="instagram_feed_box">
        <Slider ref={sliderRef} {...sliderSettings}>
          {allInstagramContent.nodes.map(iPost => {
            const image = getImage(iPost.localImage)
            return (
              <div key={iPost.id} className="insta_feed">
                <a
                  href={iPost.permalink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <StyledImage image={image} alt="insta-feed-img" />
                </a>
              </div>
            )
          })}
        </Slider>
        <div className="btn">
          <button className="prev_btn" onClick={prevSlide} type="button">
            <img src={leftArrow} alt="left-arrow-icon" />
          </button>
          <button className="next_btn" onClick={nextSlide} type="button">
            <img src={rightArrow} alt="right-arrow-icon" />
          </button>
        </div>
      </div>
    </Container>
  )
}

export default InstagramFeed
