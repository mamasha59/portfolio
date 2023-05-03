import dynamic from "next/dynamic";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Tech from "../Tech/Tech";
import { RefObject, Suspense, useEffect } from "react";
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";

const DynamicDecor = dynamic(() => import('../Decor/Decor'),{loading: () =>
  <p className="text-[red] absolute top-0 left-0 right-0 w-full h-full -z-[5] flex justify-center items-center text-xs">Loading...</p>
});

interface HeadProps{
  refPortfolio: RefObject<HTMLElement>;
  refHead: RefObject<HTMLElement>;
}

const Head:React.FC<HeadProps> = ({refPortfolio,refHead}) => {  

  const state = useAppSelector(commonState);
  
  useEffect(() => {
    if(state.isDark){
      document.body.classList.add('dark');
    }else{
      document.body.classList.remove('dark');
      document.body.classList.add('ligth');
    }
  },[state.isDark])

  return (
    <header ref={refHead} className={`${state.isDark ? 'bg-[#000]' : 'bg-[#f5f5dc]'} h-screen px-3 py-4 snap-center relative flex justify-between flex-col`}>
        <Header scrollTo={refPortfolio}/>
        <Main scrollTo={refPortfolio}/>
        <Tech/>
        <Suspense fallback={null}>
          <DynamicDecor/>
        </Suspense>
    </header>
  )
};

export default Head;
