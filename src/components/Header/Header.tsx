import Image from "next/image";
import Link from "next/link";
import Logo from '../../img/icons/logo.svg';
import Sun from '../../img/icons/sun.svg';
import Moon from '../../img/icons/moon.svg';
import { RefObject } from "react";
import useScrollToSection from "@/Hooks/useScrollToSection";
import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import { changeRotate, commonState, switchTheme } from "@/app/Store/slices/commonSlice";


interface HeaderProps{
  scrollTo: RefObject<HTMLElement>,
}

const Header:React.FC<HeaderProps> = ({scrollTo}) => {

  const state = useAppSelector(commonState);
  const dispatch = useAppDispatch();

  const scrollToSection  = useScrollToSection();

  return (
    <div className="flex justify-between items-center relative py-[1vh] mb-11">
      <Image 
          alt="лого разработчика"
          src={Logo}
          width={50}
          height={50}
          title="Логотип Алексей Тихонов"
          aria-label="Логотип Алексей Тихонов"
          className="cursor-pointer h-auto z-20"
          priority
        />
        <nav className="w-full z-20 flex">
          <ul className="flex w-full justify-evenly items-center text-sm sm:text-xs">
            <li onClick={()=> dispatch(changeRotate(!state.valueRotate))} title="Обо мне/Главная" aria-label="Обо мне/Главная" className="underline hover:italic cursor-pointer">Обо мне</li>
            <li onClick={()=> scrollToSection(scrollTo)} title="Портфолио" aria-label="Портфолио" className="underline hover:italic cursor-pointer">Портфолио</li>
            <li title="в разработке" aria-label="в разработке" className="underline hover:italic opacity-10 sm:hidden"><Link className="flex cursor-help" href={'#'}>Блог</Link></li>
          </ul>
          <button title="тема:светлый/темный" aria-label="сменить цвет страницы, светлый-темный" onClick={()=> dispatch(switchTheme())} className="group w-fit h-fit">
              {state.isDark 
                ? <Image className="group-hover:animate-spin transition-all sl:group-hover:animate-none" src={Sun} width={40} height={40} alt="иконка смена темы на светлый"/>
                : <Image src={Moon} width={40} height={40} alt="иконка смена темы на светлый"/>
               } 
          </button>
        </nav>

    </div>
  )
};

export default Header;
