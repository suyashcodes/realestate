import React from 'react'
import {DarkModeProvider} from './components/DarkModeContext'
import Header from './components/Header'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
const App = () => {
  return (
    <DarkModeProvider>
      <Header/>
      <Hero/>
      <About/>
      <PopularAreas/>
      <Properties/>
      <Footer/>
    </DarkModeProvider>
  )
}

export default App
