"use client"
import { RefObject, useState } from "react";
import { projectsFull} from './data';
import ListOfProjects from "./ListOfProjects/ListOfProjects";
import CurrentProject from "./CurrentProject/CurrentProject";

interface PortfolioProps{
  refPortfolio: RefObject<HTMLElement>;
  refHead: RefObject<HTMLElement>;
}

const Portfolio:React.FC<PortfolioProps> = ({refPortfolio,refHead}) => {
  
  const [projectName, setProjectName] = useState('интернет магазин'); // по дефолту показывает этот проект
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // текущий индекс открытого блока


  const current = projectsFull.find(e => e.idName === projectName); // по имени проекта ищем полную информацию

  const handleItemClick = (index:number,name:string):void => { // заменить активный индекс
    setActiveIndex(activeIndex === index ? null : index);
    setProjectName(name);
  };


  
  return (
        <main ref={refPortfolio} className="h-screen snap-center border border-t-orange-700 flex relative">
            <ListOfProjects setIndex={handleItemClick} currentIndex={activeIndex}/> 
            <CurrentProject current={current} refHead={refHead}/>
        </main>)
};

export default Portfolio;