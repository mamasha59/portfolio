'use client';
import Head from "@/components/Head/Head";
import Portfolio from "@/components/Portfolio/Portfolio";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "../SplashScreen/SplashScreen";
import Providers from "@/app/Store/provider";

const Page:React.FC = () => {

  const pathName = usePathname();
  const isHome = pathName === '/';
  const [isLOading, setIsLoading] = useState(isHome);

  const scrollToPortfolio = useRef<HTMLElement>(null); // блок портфолио
  const scrollToHead = useRef<HTMLElement>(null); // блок head

  useEffect(() => {
    if(isLOading) return 
  },[isLOading])
    
return (
        <Providers>
              {isLOading && isHome 
                ? <SplashScreen finish={setIsLoading}/> 
                : <>
                    <Head refHead={scrollToHead} refPortfolio={scrollToPortfolio}/>
                    <Portfolio refHead={scrollToHead} refPortfolio={scrollToPortfolio}/>
                  </>
              }
              <div className="fixed top-1/2 left-1/2 h-[1px] w-[1px] bg-[#fff] z-10 rounded-full shadow-stars animate-zoomSpace animate-pulse"></div>
        </Providers>
  )
};

export default Page;
