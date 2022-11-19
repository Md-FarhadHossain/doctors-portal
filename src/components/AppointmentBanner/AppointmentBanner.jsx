import React, { useState } from "react";
import chirImage from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png"
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

  

  return (
    <section style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }} className="h-[65vh] flex items-center justify-center">
      <div className="hero container mx-auto ">
        <div className="hero-content flex-col md:flex-row lg:flex-row">
          {/* Hero left image */}
          <div className="">
            <DayPicker 
              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}

            />

            <p>You have selected date: {format(selectedDate, 'PP')}</p>
          </div>


          {/* Hero left image */}

          {/* Hero right content */}

          <img
            src={chirImage}
            className="rounded-lg max-w-sm hidden md:block lg:block w-[70%] shadow-2xl h-full"
          />

          {/* Hero right content end */}
        </div>
      </div>
    </section>
  );
};


export default AppointmentBanner