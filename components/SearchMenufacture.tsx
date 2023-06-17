"use client";

import { SearchMenufactureProps } from "@/Types"
import { Combobox, Transition } from "@headlessui/react"
import { useState, Fragment } from "react";


const SearchMenufacture = ({manufacturer, setManufacturer}: SearchMenufactureProps ) => {
  const [query, setQuery] = useState('');
  


  return (
    <div className="search-manufacturer">
        <Combobox>
            <div className="relative w-full">
                <Combobox.Button className= "absolute top-[14px]">
                </Combobox.Button>
                <Combobox.Input 
                    className="search-manufacturer__input"
                    placeholder="Ej: Yogures"
                    displayValue={(manufacturer:string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}/>
                <Transition
                    as = {Fragment}
                    leave = "transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                 >
                    <Combobox.Options>

                    </Combobox.Options>
                                    
                </Transition>    

            </div>
        </Combobox>
    </div>
  )
}

export default SearchMenufacture