import Image from "next/image";
import StarScroll from '../../../img/icons/starShipScroll.svg';
import { RefObject, useState } from "react";
import { IProject } from "@/Types/ProjectType";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import useScrollToSection from "@/Hooks/useScrollToSection";
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";

interface CurrentProjectProps{
    current: IProject,
    refHead: RefObject<HTMLElement>;
}

const CurrentProject:React.FC<CurrentProjectProps> = ({current,refHead}) => {

    const [up,setUp] = useState(false); // состояние при клике на кнопку скролл
    const scrollToSection = useScrollToSection();
    const state = useAppSelector(commonState);
    
    const handleClick = () => {
        setTimeout(() => {
          scrollToSection(refHead,"top");
            setUp(false);
        },500)
      setUp(true);
    }

  return (
    <div className="flex w-full h-full z-20 p-3 flex-col relative">
      <ProjectPreview current={current}/>
      <ProjectLinks current={current}/>
      <Image
        src={StarScroll}
        width={80}
        height={80}
        alt={state.langDefault === 'rus' ? "скролл вверх" : 'scroll to top'}
        onClick={handleClick}
        title={state.langDefault === 'rus' ? "скролл вверх" : 'scroll to top'}
        aria-label={state.langDefault === 'rus' ? "скролл вверх" : 'scroll to top'}
        className={`cursor-pointer absolute flex w-auto -left-[53px] bottom-0 hover:opacity-60 transition-all ${up ? 'animate-goShip' : ''}`}
        />
    </div>
  )
};

export default CurrentProject;
