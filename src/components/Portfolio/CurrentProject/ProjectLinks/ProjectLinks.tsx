import Link from "next/link";
import Image from "next/image";
import GitIcon from '../../../../img/icons/github.svg';
import { Project } from "@/Types/ProjectType";

interface ProjectLinksProps {
    current: Project;
}

const ProjectLinks:React.FC<ProjectLinksProps> = ({current}) => {

  return (
  <div className="flex flex-col py-5 sl:p-1 relative">
    <h4 className="text-sm text-blue-300">ссылки на проект</h4>
    <div className={`bg-[#cd6133] flex gap-1 w-full justify-evenly text-[#000] sl:flex-wrap sl:w-full sl:bg-transparent sl:p-2 sl:items-end sl:text-sm`}>
      <Link title="перейти на гит код" aria-label="перейти на гит код" className="h-full max-h-9 flex items-center group sl:bg-[#cd6133] sl:p-1 sl:rounded-lg" href={current?.gitLink || 'https://github.com/mamasha59'}>
        <Image className="group-hover:animate-bounce" src={GitIcon} width={28} height={28} alt="иконка гитхаба"/>
        GitHub
      </Link>
      <Link title="готовый деплой" aria-label="взглянуть на готовый сайт" className="h-full max-h-9 flex items-center group sl:bg-[#cd6133] sl:p-1 sl:rounded-lg" href={current?.projectLink || 'https://github.com/mamasha59'}>
        <span className="border-solid border-b-black sl:border-b-white border-b-[25px] border-x-transparent border-x-[15px] border-t-0 group-hover:rotate-180 transition-all duration-500"></span>
        Vercel
      </Link>
    </div>
  </div>
  )
};

export default ProjectLinks;
