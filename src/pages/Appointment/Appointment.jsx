import React, { useState } from 'react'
import AppointmentBanner from '../../components/AppointmentBanner/AppointmentBanner'
import AvailableAppointment from '../../components/AvailableAppointment/AvailableAppointment'

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()) 
  return (
    <section className=''>
      <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AvailableAppointment selectedDate={selectedDate} />
    </section>
  )
}

export default Appointment