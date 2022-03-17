import React from "react";
import logo from '../../assets/logo.svg'
import mockupImg from '../../assets/illustration-mockups.svg'

import './styles.scss'

export function FirstSession() {
  return (
    <>    
      <main className="first-session-main">
        <div className="topper">
          <img src={logo} alt="Logo Huddle" />
          <button type="button">Try It Free</button>
        </div>
        <div className="content">
          <div className="first-content">
            <h1>Build The Community <br />
            Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button type="button">Get Started For Free</button>
          </div>
          <img src={mockupImg} alt="Mockup" /> 
          
        </div>
      </main>
    </>
  )
}