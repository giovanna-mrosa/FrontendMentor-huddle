import React from 'react'
import { FirstSession } from '../../components/FirstSession'
import { Footer } from '../../components/Footer'
import { SecondSession } from '../../components/SecondSession'

export function Home() {
  return (
  <>
    <FirstSession />
    <SecondSession />
    <Footer />
  </>
  )
}