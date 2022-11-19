import React from "react";
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import cavity from '../../assets/images/cavity.png'

const Service = () => {
    const cardData = [
        {
            id: 1,
            icon: fluoride,
            title: 'Fluoride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.'
        },
        {
            id: 2,
            icon: cavity,
            title: 'Cavity Filling',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.'
        },
        {
            id: 3,
            icon: whitening,
            title: 'Teeth Whitening',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.'
        },
    ]
  return (
    <section>
      <div className="container mx-auto my-16 px-4 lg:px-0">
        <div className="text-center">
          <h4 className="font-bold text-secondary">OUR SERVICES</h4>
          <h1 className="text-3xl">Services We Provide</h1>
        </div>


        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {
                cardData.map(card => <div key={card.id} className='shadow-lg rounded-2xl px-8 py-12'>
                    <div className="flex justify-center">
                    <img src={card.icon} alt="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-3 my-6">{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                </div>)
            }
        </div>
      </div>
    </section>
  );
};

export default Service;
