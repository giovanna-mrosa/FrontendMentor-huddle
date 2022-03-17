import React from "react";
import conversationImg from '../../assets/illustration-flowing-conversation.svg'

import './styles.scss'

export function Card2() {
  return (
    <>
      <div className="card2-container">
        <img src={conversationImg} alt="Conversation" />
        <div className="content">
          <h1>Flowing Conversations</h1>
          <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural  flow.</p>
        </div>        
      </div>
    </>
  )
}