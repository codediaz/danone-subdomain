'use client'

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div className='hero'>
        <div  className="flex-1 pt-36 padding-x">
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
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src= "/edp.png" 
                alt = "products"
                fill 
                className="object-contain"/>
            </div>
            <div className='hero__image-overlay'>

            </div>
        </div>
    </div>
  )
}

export default Hero