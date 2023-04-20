import Image from "next/image";
import StarScroll from '../../../img/icons/starShipScroll.svg';
import { RefObject, useState } from "react";
import { Project } from "@/Types/ProjectType";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import useScrollToSection from "@/Hooks/useScrollToSection";

interface CurrentProjectProps{
    current: Project,
    refHead: RefObject<HTMLElement>;
}

const CurrentProject:React.FC<CurrentProjectProps> = ({current,refHead}) => {

    const [up,setUp] = useState(false); // состояние при клике на кнопку скролл
    const scrollToSection = useScrollToSection();
    
    const handleClick = () => {
        setTimeout(() => {
          scrollToSection(refHead,"top");
            setUp(false);
        },500)
      setUp(true);
    }

  return (
    <div className="flex w-full h-full p-3 flex-col relative">
      <ProjectPreview current={current}/>
      <ProjectLinks current={current}/>
      <Image
        src={StarScroll}
        width={80}
        height={80}
        alt="скролл вверх"
        onClick={handleClick}
        title="скролл вверх"
        aria-label="скролл вверх"
        className={`cursor-pointer absolute flex w-auto -left-[53px] bottom-0 hover:opacity-60 transition-all ${up ? 'animate-goShip' : ''}`}
        />
    </div>
  )
};

export default CurrentProject;
