import React from 'react'
import AppointmentSection from '../../components/AppointmentSection/AppointmentSection'
import ContactUs from '../../components/ContactUs/ContactUs'
import DentalInfo from '../../components/DentalInfo/DentalInfo'
import HeroSection from '../../components/HeroSection/HeroSection'
import OutlineServiceCard from '../../components/OutlineServiceCard/OutlineServiceCard'
import Service from '../../components/Service/Service'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
        <HeroSection />
        <OutlineServiceCard />
        <Service />
        <DentalInfo />
        <AppointmentSection />
        <Testimonial />
        <ContactUs />
    </>
  )
}

export default Home