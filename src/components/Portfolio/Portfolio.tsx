"use client"
import { RefObject, useState } from "react";
import {projects, projectsFull} from './data';
import Image from "next/image";
import Dot from '../../img/icons/dot.svg';
import GitIcon from '../../img/icons/github.svg';
import Link from "next/link";

interface PortfolioProps{
  element: RefObject<HTMLElement>;
}

const Portfolio:React.FC<PortfolioProps> = ({element}) => {
  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [projectName, setProjectName] = useState('интернет магазин');

  const handleItemClick = (index:number,name:string):void => {
    setActiveIndex(activeIndex === index ? null : index);
    setProjectName(name);
  };

  const current = projectsFull.find(e => e.idName === projectName);
  
  return (
        <main ref={element} className="h-screen snap-center border border-t-orange-700 p-4 flex relative">
            <aside className="flex justify-start py-6 flex-col overflow-y-auto">
              {projects.map((i,index) =>
                <div key={index} className="flex flex-col p-6 rounded-2xl sm:p-0">
                  <h3 onClick={() => handleItemClick(index,i.title)} className={`animate-shopping cursor-pointer ${activeIndex === index ? 'opacity-100 underline' : 'opacity-50'}`}>{i.title}</h3>
                    <ul className={`flex gap-1 max-w-xs flex-wrap ${activeIndex === index ? ' opacity-100 visible translate-y-0' : '-translate-y-full opacity-0 invisible'} transition-all`}>
                      {i.techStackShort.map((tech,index) => 
                          <li className="flex items-center" key={index}>
                            <span className="first-letter:text-blue-300">{tech}</span>
                            <Image className="mx-1 bg-orange h-fit rounded-full" src={Dot} width={10} height={10} alt="разделение между"/> 
                          </li>
                      )}
                    </ul>
                </div>
              )}
            </aside>
            <div className="flex w-full h-full mx-1 p-2 flex-col relative">

                <div className="flex relative w-full h-full justify-between overflow-hidden">
                  <div className="flex flex-col justify-between midl:w-full midl:justify-center">
                    <div>
                      <h3 className="midl:text-2xl">Полный стек</h3>
                        <ul className="text-xs flex overflow-auto w-fit h-full py-5 gap-2 capitalize text-blue-300 flex-col">
                          {current?.techStackFull.map((e,index)=>
                            <li key={index}className="flex w-full">{e}</li>
                          )}
                        </ul> 
                    </div>
                    <p className="text-sm max-w-xs italic midl:text-lg">{current?.shortDescription}</p>
                  </div>
                    <div className="max-w-lg w-fit midl:hidden">
                      <Image src={current?.preview || ''} alt={current?.idName || ''} width={500} height={200}/>
                    </div>
                </div>
                
                <div className="flex flex-col py-5">
                  <h4 className="text-sm text-blue-300">ссылки на проект</h4>
                  <div className="bg-[#cd6133] flex gap-1 w-full justify-evenly text-[#000] sl:flex-col sl:w-full sl:bg-transparent sl:text-white sl:p-2 sl:items-end">
                    <Link title="перейти на гит код" aria-label="перейти на гит код" className="flex items-center group" href={current?.gitLink || 'https://github.com/mamasha59'}>
                      <Image className="group-hover:animate-bounce" src={GitIcon} width={30} height={30} alt="иконка гитхаба"/>
                      GitHub
                    </Link>
                    <Link title="готовый деплой" aria-label="взглянуть на готовый сайт" href={current?.projectLink || 'https://github.com/mamasha59'}>Vercel</Link>
                  </div>
                </div>
                <div className="fixed top-1/2 left-1/2 h-[1px] w-[1px] bg-[#fff] -z-10 rounded-full shadow-stars animate-zoomSpace animate-pulse"></div>
            </div>
        </main>)
};

export default Portfolio;