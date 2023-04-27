import { IProject } from "@/Types/ProjectType";
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";
import Image from "next/image";

interface ProjectPreviewProps {
    current: IProject;
}

const ProjectPreview:React.FC<ProjectPreviewProps> = ({current}) => {

  const state = useAppSelector(commonState);

  return (
    <div className="flex relative w-full h-full justify-between overflow-hidden">
      <div className="flex flex-col justify-between midl:w-full midl:justify-center">
        <div>
          <h3 className="midl:text-2xl sl:text-xl">{state.langDefault === 'rus' ? 'Полный стек' : 'Full stack'}</h3>
          <ul className={`text-xs flex overflow-auto w-fit h-full py-5 gap-2 capitalize  ${!state.isDark ? 'text-blue-600' : 'text-blue-300'} flex-col sl:text-[10px] sl:gap-0 sl:items-center`}>
            {current?.techStackFull.map((element, index: number) => (
              <li key={index} className="flex w-full">
                {element}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm max-w-xs italic midl:text-xs sl:text-[10px]">
          {state.langDefault === 'rus' ? current?.shortDescriptionRu : current?.shortDescriptionEng}
        </p>
      </div>
      <div className="max-w-lg w-fit midl:hidden p-3">
        <Image
          src={current?.preview || ""}
          alt={current?.idName || ''}
          width={500}
          height={200}
        />
      </div>
    </div>
  );
};

export default ProjectPreview;
