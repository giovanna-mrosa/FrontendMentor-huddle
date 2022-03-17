import React from "react";
import { Card1 } from "../Card1";
import { Card2 } from "../Card2";

import togetherImg from '../../assets/illustration-grow-together.svg'
import usersImg from '../../assets/illustration-your-users.svg'

import './styles.scss'

export function SecondSession() {
  return (
    <>
      <div className="main-container">
        <Card1 
          title={'Grow Together'} 
          text={'Generate meaningful discussion with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback'}
          image={togetherImg}
        />
        <Card2 />
        <Card1 
          title={'Your Users'} 
          text={"It takes no time at all to integrate Huddie with your apps's authentication solution. This means, once signed in to your app, your users can start chatting immediately."}
          image={usersImg}
        />
      </div>
    </>
  )
}