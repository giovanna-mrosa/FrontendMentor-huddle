import React from "react";
import logoWhiteImg from '../../assets/logoWhite.svg'
import localIcon from '../../assets/icon-location.svg'
import phoneIcon from '../../assets/icon-phone.svg'
import emailIcon from '../../assets/icon-email.svg'
import facebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter-icon.png'
import instagramIcon from '../../assets/instagram-icon.png'

import './styles.scss'

export function Footer() {
  return (
    <>
    <main className="main-footer">
      <div className="float">
        <h1>Ready To Build Your Community?</h1>
        <button type="button">Get Started For Free</button>
      </div>
      <div className="content">
        <div className="info">
          <img src={logoWhiteImg} alt="Logo" className="logo" />
          <div className="local">
            <img src={localIcon} alt="Location icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia repellendus temporibus magnam esse nostrum rerum deserunt. Aliquid debitis nesciunt.</p>
          </div>
          <div className="tel">
            <img src={phoneIcon} alt="Phone icon" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="email">
            <img src={emailIcon} alt="Email icon" />
            <p>example@huddle.com</p>
          </div>
        </div>
        <div className="links">
          <div className="row1">
            <a>About Us</a>
            <a>What We Do</a>
            <a>FAQ</a>
          </div>
          <div className="row2">
            <a>Career</a>
            <a>Blog</a>
            <a>Contact Us</a>
          </div>
        </div>
        <div className="medias">
          <a><img src={facebookIcon} alt="Facebook Icon" /></a>
          <a><img src={twitterIcon} alt="Twitter icon" /></a>
          <a><img src={instagramIcon} alt="Instagram icon" /></a>
        </div>
      </div>
      <footer>
        <p>© Copyright 2018 Huddle. All rights reserved.</p>
      </footer>
    </main>
    </>
  )
}