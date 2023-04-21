"use client"
import dynamic from "next/dynamic";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Tech from "../Tech/Tech";
import { RefObject, useState } from "react";
const DynamicDecor = dynamic(()=> import('../Decor/Decor'),{loading: () =>
  <p className="text-[red] absolute top-0 left-0 right-0 w-full h-full -z-[5] flex justify-center items-center text-xs">Loading...</p>
}); 

interface HeadProps{
  refPortfolio: RefObject<HTMLElement>;
  refHead: RefObject<HTMLElement>;
}

const Head:React.FC<HeadProps> = ({refPortfolio,refHead}) => {
  
  const [rotate, setRotate] = useState(false); // состояние блока о себе, rotate

  return (
    <header ref={refHead} className="h-screen px-3 py-4 snap-center relative flex justify-between flex-col">
        <Header scrollTo={refPortfolio} rotateState={[rotate, setRotate]}/>
        <Main scrollTo={refPortfolio} rotateState={[rotate, setRotate]}/>
        <Tech/>
        <DynamicDecor/>
    </header>
  )
};

export default Head;
