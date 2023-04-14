import Image from "next/image";
import Link from "next/link";
import Logo from '../../img/icons/logo.svg';
import { RefObject } from "react";

interface HeaderProps{
  scrollTo: RefObject<HTMLElement>,
  rotateState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Header:React.FC<HeaderProps> = ({scrollTo, rotateState}) => {

  const [rotate, setRotate] = rotateState;

  const scrollToSection = (element:RefObject<HTMLElement>) => {
    window.scrollTo({
      top: element.current?.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <div className="flex justify-between items-center my-3 relative">
      <Image alt="лого разработчика"
          src={Logo}
          width={100}
          height={100}
          title="Логотип Алексей Тихонов"
          aria-label="Логотип Алексей Тихонов"
          className="cursor-pointer"
        />
        <nav className="w-full">
          <ul className="flex w-full justify-evenly text-sm">
            <li onClick={()=> setRotate(!rotate)} title="Обо мне/Главная" aria-label="Обо мне/Главная" className="underline hover:italic cursor-pointer">Обо мне</li>
            <li onClick={()=> scrollToSection(scrollTo)} title="Портфолио" aria-label="Портфолио" className="underline hover:italic cursor-pointer">Портфолио</li>
            <li title="в разработке" aria-label="в разработке" className="underline hover:italic opacity-10"><Link className="flex cursor-help" href={'#'}>Блог</Link></li>
          </ul>
        </nav>

    </div>
  )
};

export default Header;
