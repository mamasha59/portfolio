import { Project } from "@/Types/ProjectType";
import Image from "next/image";

interface ProjectPreviewProps {
    current: Project;
}

const ProjectPreview:React.FC<ProjectPreviewProps> = ({current}) => {
  return (
    <div className="flex relative w-full h-full justify-between overflow-hidden">
      <div className="flex flex-col justify-between midl:w-full midl:justify-center">
        <div>
          <h3 className="midl:text-2xl sl:text-xl">Полный стек</h3>
          <ul className="text-xs flex overflow-auto w-fit h-full py-5 gap-2 capitalize text-blue-300 flex-col sl:text-[10px] sl:gap-0 sl:items-center">
            {current?.techStackFull.map((e, index: number) => (
              <li key={index} className="flex w-full">
                {e}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm max-w-xs italic midl:text-xs sl:text-[10px]">
          {current?.shortDescription}
        </p>
      </div>
      <div className="max-w-lg w-fit midl:hidden p-3">
        <Image
          src={current?.preview || ""}
          alt={current?.idName || ""}
          width={500}
          height={200}
        />
      </div>
    </div>
  );
};

export default ProjectPreview;
