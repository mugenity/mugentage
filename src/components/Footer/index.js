import React from "react"
import SubscriptionForm from "../SubscriptionForm"
import { FooterBox } from "./styles"

const Footer = () => {
  return (
    <FooterBox>
      <div className="footer_content">
        <div className="box1">
          <span className="logo">MugenTage.</span>
          {/* <div className="newsletter">
            <input type="text" placeholder="Email Address" />
          </div> */}
          <SubscriptionForm customBorder customWidth />
        </div>
        <div className="box2">
          <div className="about col">
            <h3 className="title">About</h3>
            <span>Contact</span>
            <span>Team</span>
            <span>About Us</span>
          </div>
          <div className="info col">
            <h3 className="title">Contact</h3>
            <span>Magazine</span>
            <span>Advertising</span>
            <span>Get in Touch</span>
          </div>
          <div className="social col">
            <h3 className="title">Follow us</h3>
            <span>FB</span>
            <span>TW</span>
            <span>YT</span>
            <span>PN</span>
          </div>
        </div>
      </div>
      <hr className="separation" />
      <span className="date">
        © {new Date().getFullYear()}, MuGenity all Rights Reserved
      </span>
    </FooterBox>
  )
}

export default Footer
