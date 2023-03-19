import React from 'react'

import Header from './Layout/Header'
import Hero from './Layout/Hero'
import Services from './Layout/Services'
import About from './Layout/About'
import Project from './Layout/Project'
import Contact from './Layout/Contact'
import Footer from './Layout/Footer'


export default function App() {
  return (
    <div>
        <Header />
        <Hero />
        <Services />
        <About />
        <Project />
        <Contact />
        <Footer />
    </div>
  )
}
