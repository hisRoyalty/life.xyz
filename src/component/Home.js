import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactUs from './ContactUs'
import Staff from './Staff'
import About from './About'


// Home component with every component (most)



function Home() {
  return (
    <div className='bg-green-200'>
    <Header></Header>
    <About></About>
    <Staff></Staff>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </div>
    
    
  )
}

export default Home