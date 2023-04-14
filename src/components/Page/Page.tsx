'use client';
import Head from "@/components/Head/Head";
import Portfolio from "@/components/Portfolio/Portfolio";
import { useRef } from "react";

const Page:React.FC = () => {

const scrollTo = useRef<HTMLElement>(null); // блок портфолио
    
return (
        <>
            <Head element={scrollTo}/>
            <Portfolio element={scrollTo}/>
        </>
  )
};

export default Page;
