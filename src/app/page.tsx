import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Faqs from './components/Faqs'
import Cta from './components/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <Faqs />
      <Cta />
    </>
  )
}
