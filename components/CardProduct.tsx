"use client";

import { ProductProps } from '@/Types';
import Image from 'next/image';
import {useState} from 'react'
import CustomButton from './CustomButton';
import ProductDetail from './ProductDetail';

interface Product {
  title: string;
  tags: string[];
  availableIn: string;
  energyValue: string;
  fats: string;
  carbohydrates: string;
  description: string;
  ingredients: string;
  coverImage: {
    url: string;
  };
  productData: string;
  ean: string;
  price: string;
  nutriScore: {
    url: string;
  };
}


interface ProductCardProps{
    product: Product;
}

const CardProduct = ({product} : ProductCardProps) => {

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
            price,
            nutriScore} = product || {}
    return (
    <div className='product-card group'>
        <div className='product-card__content'>
            <h2 className='product-card__content-title'>
                {title}
            </h2>
        </div>
        <div className='relative w-full h-40 my-3 object-contain '>
        {coverImage && coverImage.url && (
          <Image
            alt={title}
            src={coverImage.url}
            fill
            priority
            className='object-contain'
          />
        )}
        </div>

        <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            
          </div>
          <div className="product-card__icon">
            
          </div>
          <div className="product-card__icon">
            <Image src="/heart-filled.svg" width={20} height={20} alt="seat" />
            <p className="product-card__icon-text">{tags}</p>
          </div>
        </div>

        <div className="product-card__btn-container">
          <CustomButton
            title='Ver detalles'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
       

        <ProductDetail
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            product={product}
        />
    </div>
  )
}

export default CardProduct
