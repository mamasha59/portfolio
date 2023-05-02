import { RefObject, Suspense, useState } from "react";
import { projectsFull} from './data';
import ListOfProjects from "./ListOfProjects/ListOfProjects";
import CurrentProject from "./CurrentProject/CurrentProject";
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";

interface PortfolioProps{
  refPortfolio: RefObject<HTMLElement>;
  refHead: RefObject<HTMLElement>;
}

const Portfolio:React.FC<PortfolioProps> = ({refPortfolio,refHead}) => {
  
  const [projectName, setProjectName] = useState('интернет магазин'); // по дефолту показывает этот проект
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // текущий индекс открытого блока

  const state = useAppSelector(commonState);
  const current = projectsFull.find(e => e?.idName === projectName); // по имени проекта ищем полную информацию

  const handleItemClick = (index:number,name:string):void => { // заменить активный индекс
    setActiveIndex(activeIndex === index ? null : index);
    setProjectName(name);
  };

  return (
        <main ref={refPortfolio} className={`${state.isDark ? 'bg-[#000]' : 'bg-[#f5f5dc]'} h-screen snap-end border border-t-orange-700 flex relative z-20`}>
            <ListOfProjects setIndex={handleItemClick} currentIndex={activeIndex}/>
            <Suspense fallback={null}>
              <CurrentProject current={current} refHead={refHead}/>
            </Suspense>
        </main>)
};

export default Portfolio;