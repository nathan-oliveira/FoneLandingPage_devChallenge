import React from "react"
import Img from "../../Image/image"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <div className="footer-img">
            <Img name="activity" />
          </div>
          <p className="title-audio">High-Resolution Audio compatible</p>
        </div>
        <div className="footer-item">
          <div className="footer-img">
            <Img name="bluetooth" />
          </div>
          <p className="title-wireless">Wireless connectivity using bluetooth</p>
        </div>
        <div className="footer-item">
          <div className="footer-img">
            <Img name="battery" />
          </div>
          <p className="title-powerful">A powerful battery that lasts up to 4 hours of use</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer