import Link from "next/link";
import Image from "next/image";
import img1 from '../../../img/alesha.svg';

interface UserPhotoProps{
    rotateState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    show: boolean;
}

const UserPhoto:React.FC<UserPhotoProps> = ({rotateState,show}) => {

  const [rotate] = rotateState;

  return (
    <div className={`relative h-fit min-w-[250px] ${show ? '-translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all`}>
    <div className="absolute -top-10 text-sm flex justify-between w-full midl:flex midl:justify-between midl:top-0 sm:justify-end sm:gap-3">
      <Link className={`${rotate ? 'animate-bounce' : 'animate-none'}`} title="Посмотреть диплом" aria-label="Посмотреть диплом" href={'https://disk.yandex.ru/i/HH4kMPGDHV-CAw'} >Диплом <span className="text-yellow-500">Я</span>П</Link>
      <Link className={`${rotate ? 'animate-bounce' : 'animate-none'}`} title="Посмотреть все проекты" aria-label="Посмотреть все проекты" href={'https://github.com/mamasha59'} >GitHub</Link>
    </div>
    <Image priority src={img1} width={300} alt="картинка алеши" className="shadow-xl z-30 bg-orange midl:hidden"/>
  </div>
  )
};

export default UserPhoto;
