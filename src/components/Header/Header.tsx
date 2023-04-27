import Image from "next/image";
import Logo from '../../img/icons/logo.svg';
import { RefObject } from "react";
import Nav from "./Nav/Nav";
import { useAppSelector } from "@/app/Store/hooks";
import { commonState } from "@/app/Store/slices/commonSlice";

interface HeaderProps{
  scrollTo: RefObject<HTMLElement>,
}

const Header:React.FC<HeaderProps> = ({scrollTo}) => {

  const state = useAppSelector(commonState);

  return (
    <div className="flex justify-between items-center relative py-[1vh] mb-11">
      <Image 
          alt={state.langDefault === 'rus' ? "лого разработчика" : 'developer logo'}
          src={Logo}
          width={50}
          height={50}
          title={state.langDefault === 'rus' ? "лого разработчика" : 'Aleksei Tikhonov'}
          aria-label={state.langDefault === 'rus' ? "лого разработчика" : 'Aleksei Tikhonov'}
          className="cursor-pointer h-auto z-20"
          priority
        />
      <Nav scrollTo={scrollTo}/>
    </div>
  )
};

export default Header;
