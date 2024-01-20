import React from 'react'
import Hero from '../components/componentssec/Hero'
import Boxes from '../components/componentssec/Boxes'
import EasySteps from '../components/componentssec/EasySteps'
import VerifyCertificate from '../components/componentssec/VerifyCertificate'
import Layout from './layout'

export default function MainPage() {
  return (
    <div>
        <Hero />
        <Boxes />
        <EasySteps />
        <VerifyCertificate />
    </div>
  )
}
