import Link from "next/link";
import Image from "next/image";
import Aleksei from '../../../img/alesha.jpg';
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";
import { languages } from "@/lang/lang";


interface UserPhotoProps{
    show: boolean;
}

const UserPhoto:React.FC<UserPhotoProps> = ({show}) => {

  const state = useAppSelector(commonState);
  const text = languages.main[state.langDefault]; // текст статически меняется на рус/eng

  return (
    <div className={`relative h-fit min-w-[250px] ${show ? '-translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all z-20`}>
    <div className="absolute -top-10 text-sm flex justify-between w-full midl:flex midl:justify-between midl:top-0 sm:justify-end sm:gap-3">
      <Link
          className={`${state.valueRotate ? 'animate-bounce' : 'animate-none'}`}
          title={state.langDefault === 'rus' ? "Посмотреть диплом" : 'Diploma YandexPractikum'}
          aria-label={state.langDefault === 'rus' ? "Посмотреть диплом" : 'Diploma YandexPraktikum'}
          href={'https://disk.yandex.ru/i/HH4kMPGDHV-CAw'}>
            {text.about.diploma}
            <span className="text-yellow-500">{state.langDefault === 'rus' ? ' ЯП' : ' YP'}</span>
      </Link>
      <Link 
          className={`${state.valueRotate ? 'animate-bounce' : 'animate-none'}`}
          title={state.langDefault === 'rus' ? "Посмотреть проекты" : 'Look at projects'}
          aria-label={state.langDefault === 'rus' ? "Посмотреть проекты" : 'Look at projects'}
          href={'https://github.com/mamasha59'}>
            GitHub
      </Link>
    </div>
    <Image
      loading="lazy"
      src={Aleksei}
      width={300}
      height={400}
      alt={state.langDefault === 'rus' ? "Фото Алексей" : 'Aleksei\'s photo'}
      className="rounded-sm z-30 bg-orange midl:hidden"/>
  </div>
  )
};

export default UserPhoto;
