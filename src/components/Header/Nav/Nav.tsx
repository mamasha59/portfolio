import useScrollToSection from "@/Hooks/useScrollToSection";
import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import { changeRotate, commonState, switchTheme } from "@/app/Store/slices/commonSlice";
import Link from "next/link";
import Image from "next/image";
import Sun from '../../../img/icons/sun.svg';
import Moon from '../../../img/icons/moon.svg';
import { RefObject } from "react";
import { languages } from "@/lang/lang";

interface NavProps {
    scrollTo: RefObject<HTMLElement>,
}

const Nav:React.FC<NavProps> = ({scrollTo}) => {

    const dispatch = useAppDispatch();
    const state = useAppSelector(commonState);
    const scrollToSection  = useScrollToSection();
    const text = languages.header[state.langDefault];

  return (
    <nav className="w-full z-20 flex">
        <ul className="flex w-full justify-evenly items-center text-sm sm:text-xs">
            <li onClick={()=> dispatch(changeRotate(!state.valueRotate))} title={text.about} aria-label={text.about} className="underline hover:italic cursor-pointer">
            {text.about}
            </li>
            <li onClick={()=> scrollToSection(scrollTo)} title={text.portfolio} aria-label={text.portfolio} className="underline hover:italic cursor-pointer">
            {text.portfolio}
            </li>
            <li title="в разработке/in process" aria-label="в разработке/in process" className="underline hover:italic opacity-10 sm:hidden">
                <Link className="flex cursor-help" href={'#'}>
                    {text.blog}
                </Link>
            </li>
        </ul>
        <button title={state.langDefault === 'rus' ? "тема:светлый/темный" : 'theme:light/dark'} aria-label={state.langDefault === 'rus' ? "тема:светлый/темный" : 'theme:light/dark'} onClick={()=> dispatch(switchTheme())} className="group w-fit h-fit">
            {state.isDark 
                ? <Image className="group-hover:animate-spin transition-all sl:group-hover:animate-none" src={Sun} width={40} height={40} alt={state.langDefault === 'rus' ? "иконка солнца" : 'icon of sun'}/>
                : <Image src={Moon} width={40} height={40} alt={state.langDefault === 'rus' ? "иконка луны" : 'icon of sun'}/>
            } 
        </button>
  </nav>
  )
};

export default Nav;
