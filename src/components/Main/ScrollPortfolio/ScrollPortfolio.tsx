import useScrollToSection from "@/Hooks/useScrollToSection";
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";

import { RefObject } from "react";

interface ScrollPortfolioProps{
    scrollTo: RefObject<HTMLElement>,
  }

const ScrollPortfolio:React.FC<ScrollPortfolioProps> = ({scrollTo}) => {

  const scrollToSection  = useScrollToSection();
  const state = useAppSelector(commonState);
      
  return (
    <button
      onClick={()=>scrollToSection(scrollTo)}
      title={state.langDefault === 'rus' ? 'скролл вниз' : 'scroll down'}
      className={`absolute z-50 bottom-0 left-1/2 -translate-x-[50%] -translate-y-[100%] w-5 h-8 border ${state.isDark ? 'border-white' : 'border-black'} rounded-md cursor-pointer overflow-hidden ${state.valueRotate ? 'midl:opacity-0' : 'opacity-100'}`}>
      <span className="flex justify-center items-center text-sm p-1 text-orange animate-bounce border-b border-blue-300">&darr;</span>
    </button>
  )
};

export default ScrollPortfolio;
