import { CustomFilter, Hero, SearchBar } from '@/components'
import Image from 'next/image'

export default function Home() {
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

     </div>
    </main>
  )
}
