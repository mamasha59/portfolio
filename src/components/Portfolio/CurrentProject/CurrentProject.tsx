import Image, { StaticImageData } from "next/image";
import GitIcon from '../../../img/icons/github.svg';
import StarScroll from '../../../img/icons/starShipScroll.svg';
import { RefObject, useState } from "react";
import Link from "next/link";

type Project = {
    idName: string;
    techStackFull: string[];
    gitLink: string;
    projectLink: string;
    shortDescription: string;
    preview: StaticImageData;
}

interface CurrentProjectProps{
    current: Project | undefined,
    refHead: RefObject<HTMLElement>;
}

const CurrentProject:React.FC<CurrentProjectProps> = ({current,refHead}) => {

    const [up,setUp] = useState(false); // состояние при клике на кнопку скролл
    
    const scrollToSection = (element:RefObject<HTMLElement>) => {
        setTimeout(()=>{
            window.scrollTo({
            top: element.current?.offsetTop,
            behavior: "smooth"
          })
          setUp(false);
        },500)
      setUp(true);
      }

  return (
    <div className="flex w-full h-full p-3 flex-col relative">

    <div className="flex relative w-full h-full justify-between overflow-hidden">
      <div className="flex flex-col justify-between midl:w-full midl:justify-center">
        <div>
          <h3 className="midl:text-2xl sl:text-xl">Полный стек</h3>
            <ul className="text-xs flex overflow-auto w-fit h-full py-5 gap-2 capitalize text-blue-300 flex-col sl:text-[10px] sl:gap-0 sl:items-center">
              {current?.techStackFull.map((e,index:number)=>
                <li key={index}className="flex w-full">{e}</li>
              )}
            </ul> 
        </div>
        <p className="text-sm max-w-xs italic midl:text-xs sl:text-[10px]">{current?.shortDescription}</p>
      </div>
        <div className="max-w-lg w-fit midl:hidden p-3">
          <Image src={current?.preview || ''} alt={current?.idName || ''} width={500} height={200}/>
        </div>
    </div>
    
    <div className="flex flex-col py-5 sl:p-1 relative">
      <h4 className="text-sm text-blue-300">ссылки на проект</h4>
      <div className="bg-[#cd6133] flex gap-1 w-full justify-evenly text-[#000] sl:flex-col sl:w-full sl:bg-transparent sl:text-white sl:p-2 sl:items-end sl:text-sm">
        <Link title="перейти на гит код" aria-label="перейти на гит код" className="flex items-center group" href={current?.gitLink || 'https://github.com/mamasha59'}>
          <Image className="group-hover:animate-bounce" src={GitIcon} width={30} height={30} alt="иконка гитхаба"/>
          GitHub
        </Link>
        <Link title="готовый деплой" aria-label="взглянуть на готовый сайт" href={current?.projectLink || 'https://github.com/mamasha59'}>Vercel</Link>
      </div>
      <button onClick={() => scrollToSection(refHead)} title="скролл вверх" aria-label="скролл вверх" className={`absolute flex h-fit -left-[53px] bottom-0 hover:opacity-60 transition-all ${up ? 'animate-goShip' : ''}`}>
        <Image
          src={StarScroll}
          width={80}
          height={40}
          alt="скролл вверх"
          />
      </button>

    </div>
    <div className="fixed top-1/2 left-1/2 h-[1px] w-[1px] bg-[#fff] -z-10 rounded-full shadow-stars animate-zoomSpace animate-pulse"></div>
</div>
  )
};

export default CurrentProject;
