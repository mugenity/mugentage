import React from "react"
import SubscriptionForm from "../SubscriptionForm"
import newsletterImg from "../../Images/newsletter1.jpg"
import mailIcon from "../../Images/email-icon.png"
import { Container } from "./styles"

const NewsLetter = () => {
  return (
    <Container>
      <div className="img_box">
        <img src={newsletterImg} alt="newsletter-img" />
      </div>
      <div className="newsletter_box">
        <div className="content">
          <div className="title">
            <img src={mailIcon} alt="email-icon" />
            <h3>Subscribe to be notify for latest news. </h3>
          </div>
          <SubscriptionForm />
        </div>
      </div>
    </Container>
  )
}

export default NewsLetter
