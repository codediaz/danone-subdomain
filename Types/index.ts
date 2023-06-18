import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    title: string;
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchMenufactureProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface ProductProps {
    title : string;
    tags?: string;
    availableIn?: string;
    energyValue ?: string;
    fats ?: string;
    carbohydrates ?: string;
    description ?: string;
    ingredients ?: string;
    coverImage?: Object
    productData?: string;
    ean?: string;
    nutriScore ?: Object
}
