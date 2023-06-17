'use client'

import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-336 padding-x'>
            <h1 className='hero__title'>
            Los productos más ecológicos y saludables
            </h1>

            <p className='hero_subtitle'>
                Mejora tu alimentación y obtén los resultados que tanto anehalabas
            </p>

            <CustomButton
            title = "Más información"
            containerStyles= "bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}/>
        </div>
    </div>
  )
}

export default Hero