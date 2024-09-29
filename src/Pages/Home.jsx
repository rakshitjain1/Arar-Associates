import React from 'react'
import Products from "../components/Products/Products"
import Testimonials from "../components/Testimonials/Testimonials"
import Banner from "../components/Banner/Banner"
import TopProducts from "../components/TopProducts/TopProducts"
import Senior from "../components/senior/Senior"
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
function Home() {
  return (
    
         <>
  
      <Hero/>
      <Products/>
      <Testimonials/>
      <Banner/>
      <TopProducts />
      <Senior/>
    
    </>
  )
}

export default Home
