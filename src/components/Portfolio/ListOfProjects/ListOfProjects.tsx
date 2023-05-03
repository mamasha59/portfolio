import Image from "next/image";
import Dot from '../../../img/icons/dot.svg';
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";
import { IProjectShort } from "@/Types/ProjectType";

type handleItemClick =  (index: number, name: string) => void;

interface ListOfProjectsProps{
    currentIndex: number | null;
    setIndex: handleItemClick;
    projectsShort: IProjectShort[] | undefined;
}

const ListOfProjects:React.FC<ListOfProjectsProps> = ({setIndex,currentIndex,projectsShort}) => {
 
    const state = useAppSelector(commonState);

  return (
    <aside className="flex z-20 justify-start py-6 flex-col overflow-y-auto sl:justify-center sl:px-3 sl:max-w-[40%]">

        {projectsShort?.map((i,index:number) =>
        <div key={index} className="flex flex-col p-4 rounded-2xl sm:p-0">
            <h2 onClick={() => setIndex(index,i.titleRu)}
             className={`${state.isDark ? 'text-orange' : 'text-lightModeT'} capitalize cursor-pointer ${currentIndex === index ? 'opacity-100 underline' : 'opacity-50'} sm:text-base`}>
                {state.langDefault === 'rus' ? i.titleRu : i.titleEng}
            </h2>
            <ul className={`flex gap-1 max-w-xs flex-wrap ${currentIndex === index ? ' opacity-100 visible translate-y-0' : '-translate-y-full opacity-0 invisible'} transition-all sl:text-xs`}>
                {i.techStackShort.map((tech,index) => 
                    <li className="flex items-center" key={index}>
                        <span className="first-letter:text-blue-300">{tech}</span>
                        <Image className="mx-1 bg-orange h-fit rounded-full" src={Dot} width={10} height={10} alt="dot"/> 
                    </li>
                )}
            </ul>
        </div>
        )}

  </aside>
  )
};

export default ListOfProjects;
