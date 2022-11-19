import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import OutlineServiceCard from '../../components/OutlineServiceCard/OutlineServiceCard'
import Service from '../../components/Service/Service'

const Home = () => {
  return (
    <>
        <HeroSection />
        <OutlineServiceCard />
        <Service />
    </>
  )
}

export default Home