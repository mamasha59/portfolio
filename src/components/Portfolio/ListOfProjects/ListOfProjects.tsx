import Image from "next/image";
import Dot from '../../../img/icons/dot.svg';
import { projects } from "../data";

type handleItemClick =  (index: number, name: string) => void;

interface ListOfProjectsProps{
    currentIndex: number | null,
    setIndex: handleItemClick
}

const ListOfProjects:React.FC<ListOfProjectsProps> = ({setIndex,currentIndex}) => {

  return (
    <aside className="flex justify-start py-6 flex-col overflow-y-auto sl:justify-center sl:px-3 sl:max-w-[40%]">
        {projects.map((i,index:number) =>
        <div key={index} className="flex flex-col p-4 rounded-2xl sm:p-0">
            <h2 onClick={() => setIndex(index,i.title)} className={`animate-shopping cursor-pointer ${currentIndex === index ? 'opacity-100 underline' : 'opacity-50'} sm:text-base`}>{i.title}</h2>
            <ul className={`flex gap-1 max-w-xs flex-wrap ${currentIndex === index ? ' opacity-100 visible translate-y-0' : '-translate-y-full opacity-0 invisible'} transition-all sl:text-xs`}>
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
  )
};

export default ListOfProjects;
