import React from 'react'
import { Link } from 'react-router-dom'
import { RoutesPath } from '../../constants'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="footer-top">
          <div className="logo-desc">
            <div className="ft-logo">
              <img src="/logo/logo.png" alt="wine trust" className="ft-logo-img" />
            </div>
            <div className="ft-desc">
              WineTrust is the most secure way to own and store fine wine & spirts today.
            </div>
          </div>
          <div id="wine-trust-info" className="footer-links">
            <div className="footer-title">Winetrust</div>
            <Link to={RoutesPath.HOMEPAGE}>Home</Link>
            <Link to={RoutesPath.ABOUT}>About</Link>
            <Link to={RoutesPath.ABOUT}>Contact Us</Link>
            <a href="#id">FAQs</a>
          </div>
          <div id="legal-info" className="footer-links">
            <div className="footer-title">Legal</div>
            <a href="#id">Privacy Policy Page</a>
            <a href="#id">Terms and Conditions</a>
          </div>
          <div id="alliance-info" className="footer-links">
            <div className="footer-title">Alliance</div>
            <a href="#id">Partners</a>
            <a href="#id">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>Copyright© 2022. Wine Trust All rights reserved.</div>
        <div className="tnc-policy">
          <div>Terms and Conditions</div>
          <div>Privacy Policy Page</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
