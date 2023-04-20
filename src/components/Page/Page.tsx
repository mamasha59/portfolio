'use client';
import { ContextProvider } from "@/Context/store";
import Head from "@/components/Head/Head";
import Portfolio from "@/components/Portfolio/Portfolio";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "../SplashScreen/SplashScreen";

const Page:React.FC = () => {

  const pathName = usePathname();
  const isHome = pathName === '/';
  const [isLOading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if(isLOading) return 
  },[isLOading])

  const scrollToPortfolio = useRef<HTMLElement>(null); // блок портфолио
  const scrollToHead = useRef<HTMLElement>(null); // блок head
    
return (
        <>
          {isLOading && isHome 
            ? <SplashScreen finish={setIsLoading}/> 
            : <>
                <Head refHead={scrollToHead} refPortfolio={scrollToPortfolio}/>
                <Portfolio refHead={scrollToHead} refPortfolio={scrollToPortfolio}/>
              </>
          }
        </>
  )
};

export default Page;
