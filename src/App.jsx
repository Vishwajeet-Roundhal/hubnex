import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Page from './Components/Page'
import Partners from './Components/Partners'
import Benefits from './Components/Benefits'
import Hero from './Components/Hero'
import CaseStudies from './Components/CaseStudies'
import Metrics from './Components/Metrics'
import Testimonials from './Components/Testimonials'
import BlogPosts from './Components/BlogPosts'
import SalesCta from './Components/SalesCta'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page />
      <Partners />
      <Benefits />
      <Hero />
      <CaseStudies />
      <Metrics />
      <Testimonials />
      <BlogPosts />
      <SalesCta />
      <Footer />
    </>
  )
}

export default App
