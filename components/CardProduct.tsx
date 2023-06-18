"use client";

import { ProductProps } from '@/Types';
import Image from 'next/image';
import {useState} from 'react'
import CustomButton from './CustomButton';

interface ProductCardProps{
    product: ProductProps;
}

const CardProduct = ({product} : ProductProps) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const {
            title,
            tags,
            availableIn,
            energyValue,
            fats,
            carbohydrates,
            description,
            ingredients,
            coverImage,
            productData,
            ean,
            nutriScore} = product
    return (
    <div className='product-card group'>
        <div className='product-card__content'>
            <h2 className='product-card__content-title'>
                {title}
            </h2>
        </div>
        <p>
            <span>{tags}</span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain '>
            <Image
                alt= {title}               
                src={coverImage.url}
                fill
                priority
                className='object-contain'/>
        </div>

        <div className='relative flex w-full mt-2'>
        <div className="product-card__btn-container">  
          <CustomButton
            title='Más detalles'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
            </div>
        </div>
    </div>
  )
}

export default CardProduct