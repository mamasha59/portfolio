import useScrollToSection from "@/Hooks/useScrollToSection";
import { RefObject } from "react";

interface ScrollPortfolioProps{
    scrollTo: RefObject<HTMLElement>,
  }

const ScrollPortfolio:React.FC<ScrollPortfolioProps> = ({scrollTo}) => {

  const scrollToSection  = useScrollToSection();
      
  return (
    <div onClick={()=>scrollToSection(scrollTo)} title="скрол вниз" className="absolute z-50 bottom-0 left-1/2 -translate-x-[50%] -translate-y-[100%] w-5 h-8 border rounded-md cursor-pointer overflow-hidden">
    <span className="flex justify-center items-center text-sm p-1 text-orange animate-bounce border-b border-blue-300">&darr;</span>
  </div>
  )
};

export default ScrollPortfolio;
