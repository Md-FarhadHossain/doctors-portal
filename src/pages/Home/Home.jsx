import React from 'react'
import DentalInfo from '../../components/DentalInfo/DentalInfo'
import HeroSection from '../../components/HeroSection/HeroSection'
import OutlineServiceCard from '../../components/OutlineServiceCard/OutlineServiceCard'
import Service from '../../components/Service/Service'

const Home = () => {
  return (
    <>
        <HeroSection />
        <OutlineServiceCard />
        <Service />
        <DentalInfo />
    </>
  )
}

export default Home