import { RefObject, Suspense, useEffect, useState } from "react";
import {IProjects} from '../../Types/ProjectType';
import ListOfProjects from "./ListOfProjects/ListOfProjects";
import CurrentProject from "./CurrentProject/CurrentProject";
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";

interface PortfolioProps{
  refPortfolio: RefObject<HTMLElement>;
  refHead: RefObject<HTMLElement>;
}

const Portfolio:React.FC<PortfolioProps> = ({refPortfolio,refHead}) => {
  
  const [projectName, setProjectName] = useState<string>('интернет магазин'); // по дефолту показывает этот проект
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // текущий индекс открытого блока

  const [projects, setProjects] = useState<IProjects>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const state = useAppSelector(commonState);

  useEffect(() => { // загрузка проектов
    const getData = async () => {
      try {
        const req = await fetch('/api/projects');
        const data = await req.json();
        setProjects(data.projects);
      } catch (error) {
        alert('ошибка при загрузке данных');
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  },[])

  const current = projects?.projectsFull?.find(item => item?.idName === projectName); // по имени проекта ищем полную информацию

  const handleItemClick = (index:number,name:string):void => { // заменить активный индекс
    setActiveIndex(activeIndex === index ? null : index);
    setProjectName(name);
  };

  if(isLoading) return <p>loading</p>

  return (
        <main ref={refPortfolio} className={`${state.isDark ? 'bg-[#000]' : 'bg-[#f5f5dc]'} h-screen snap-end border border-t-orange-700 flex relative`}>
            <ListOfProjects projectsShort={projects?.projectsShort} setIndex={handleItemClick} currentIndex={activeIndex}/>
            <Suspense fallback={null}>
              <CurrentProject current={current} refHead={refHead}/>
            </Suspense>
        </main>
  )
};

export default Portfolio;