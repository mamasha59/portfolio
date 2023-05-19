'use client';
import Head from "@/components/Head/Head";
import Portfolio from "@/components/Portfolio/Portfolio";
import { Suspense, useEffect, useRef } from "react";
import SplashScreen from "./loading";
import { useAppDispatch } from "./Store/hooks";
import { switchTheme } from "./Store/slices/commonSlice";

const Page:React.FC = () => {

  const scrollToPortfolio = useRef<HTMLElement>(null); // блок портфолио
  const scrollToHead = useRef<HTMLElement>(null); // блок head
  
  const dispatch = useAppDispatch();

  useEffect(() => { // выбрана ли светлая тема
    if(window.localStorage.getItem('isDark') === 'false') dispatch(switchTheme());
  },[dispatch, switchTheme])

return (
        <Suspense fallback={<SplashScreen/>}>
          <Head refHead={scrollToHead} refPortfolio={scrollToPortfolio}/>
          <Portfolio refHead={scrollToHead} refPortfolio={scrollToPortfolio}/>
          <div className="fixed top-1/2 left-1/2 h-[1px] w-[1px] bg-[#fff] z-10 rounded-full shadow-stars animate-zoomSpace animate-pulse"></div>
        </Suspense>
  )
};

export default Page;
