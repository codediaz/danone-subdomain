"use client";

import { CardProduct, CustomFilter, Hero, SearchBar } from '@/components'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const query = gql`
    query{
      products{
        title
        tags
        availableIn
        energyValue
        fats
        carbohydrates
        description
        ingredients
        coverImage {
          url
        }
        productData
        ean
        price
        nutriScore {
          url
        }
      }
    }
    `;

    try {
      const data = await request(process.env.HYGRAPH_API_URL, query);
      setProducts(data.products);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const isProductsEmpty = !Array.isArray(products) || products.length < 1 || !products;

  return (
    
    <main className="overflow-hidden">
     <Hero/>

     <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>
          Catálogo de Productos
        </h1>
        <p>Explora los productos que más te gusten</p>
      </div>

      <div className='home__filters'>
        <SearchBar/>
      <div className='home__filter-container'>
        <CustomFilter  title = "fuel"/>
      </div>  
      </div>

      {!isProductsEmpty ? (
      <section>
       <div className='home__products-wrapper'>
            {products?.map((product => (
              <CardProduct product = {product}/>
            )))}
       </div>
      </section>
      ): (
        <div className='home__error-container'>
          <h2 className='text-black font-bold text-xl'>Oops, no results</h2>
        </div>
      )}
     </div>
    </main>
  )
}
