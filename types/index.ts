import {MouseEventHandler} from "react";
export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    btnType?:'button' |"submit"
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    textStyles?:string
    rightIcon?:string
    isDisabled?:boolean



}
export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }
export interface CarCardProps {
    city_mpg:number;
    class: string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number

}
export interface FilterProps{manufacturer: string, model: string,year: number,fuel:string,limit: number}

export interface OptionProps{title:string, value:string}
export interface CustomFilterProps{title:string,options:OptionProps[]}
export interface ShowMoreProps{pageNumber:number,
isNext:boolean}

  
  export interface HomeProps {
    searchParams: FilterProps;
  }