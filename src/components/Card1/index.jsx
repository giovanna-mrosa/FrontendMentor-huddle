import React from "react";


import './styles.scss'

export function Card1({title, text, image}) {
  return (
    <>
    <div className="card1-container">
      <div className="content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <img src={image} alt="Couple" />
    </div>
    </>
  )
}