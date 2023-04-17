'use client';
import Head from "@/components/Head/Head";
import Portfolio from "@/components/Portfolio/Portfolio";
import { useRef } from "react";

const Page:React.FC = () => {

const scrollToPortfolio = useRef<HTMLElement>(null); // блок портфолио
const scrollToHead = useRef<HTMLElement>(null); // блок head
    
return (
        <>
            <Head refHead={scrollToHead} refPortfolio={scrollToPortfolio}/>
            <Portfolio refHead={scrollToHead} refPortfolio={scrollToPortfolio}/>
        </>
  )
};

export default Page;
