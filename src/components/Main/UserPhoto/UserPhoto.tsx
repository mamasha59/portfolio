import Link from "next/link";
import Image from "next/image";
import Aleksei from '../../../img/alesha.jpg';
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";


interface UserPhotoProps{
    show: boolean;
}

const UserPhoto:React.FC<UserPhotoProps> = ({show}) => {

  const state = useAppSelector(commonState);

  return (
    <div className={`relative h-fit min-w-[250px] ${show ? '-translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all z-20`}>
    <div className="absolute -top-10 text-sm flex justify-between w-full midl:flex midl:justify-between midl:top-0 sm:justify-end sm:gap-3">
      <Link className={`${state.valueRotate ? 'animate-bounce' : 'animate-none'}`} title="Посмотреть диплом" aria-label="Посмотреть диплом" href={'https://disk.yandex.ru/i/HH4kMPGDHV-CAw'} >Диплом <span className="text-yellow-500">Я</span>П</Link>
      <Link className={`${state.valueRotate ? 'animate-bounce' : 'animate-none'}`} title="Посмотреть все проекты" aria-label="Посмотреть все проекты" href={'https://github.com/mamasha59'} >GitHub</Link>
    </div>
    <Image loading="lazy" src={Aleksei} width={300} height={400} alt="картинка алеши" className="rounded-sm z-30 bg-orange midl:hidden"/>
  </div>
  )
};

export default UserPhoto;
