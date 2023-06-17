'use client'

import { CustomButtonProps } from "@/Types"
import Image from "next/image"



const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
   <button
   disabled={false}
   type = {"button"}
   className={`custom-btn ${containerStyles}`}
   onClick={handleClick}
   >
    <span className="{`flex-1`}">
        {title}
    </span>

   </button>
  )
}

export default CustomButton