"use client";

import { CustomFilter, Hero, SearchBar } from '@/components'
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
          id
        }
        productData
        ean
        nutriScore {
          id
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


      <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.title}>
            <h2>{product.title}</h2>
          </li>
        ))}
      </ul>
    </div>

     </div>
    </main>
  )
}
