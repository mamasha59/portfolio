import Image from "next/image";
import img1 from '../../img/alesha.svg' 
import SocialMedia from "../Header/SocialMedia/SocialMedia";
import Gmail from '../../img/icons/gmail.svg';
import { RefObject } from "react";
import Link from "next/link";

interface MainProps{
  scrollTo: RefObject<HTMLElement>,
  rotateState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Main:React.FC<MainProps> = ({scrollTo,rotateState}) => {

  const [rotate, setRotate] = rotateState;

  const scrollToSection = (element:RefObject<HTMLElement>) => {
    window.scrollTo({
      top: element.current?.offsetTop,
      behavior: "smooth"
    })
  }
  
  return (
    <div className="pt-16 flex justify-around relative">
      <SocialMedia/>
      <div onClick={()=> setRotate(!rotate)} className="flex max-w-[448px] w-full perspective">

        <div className={`inner w-full h-full transition-all duration-700 relative ${rotate ? 'inner back' : ''}`}>
          <div className="absolute w-full h-full z-20 flex flex-col cursor-pointer">
            <h1 className="max-w-md"> <pre className="text-[grey]">&lt;h1&gt;</pre> Привет, меня зовут <span className="text-3xl text-blue-300">
              Алексей Тихонов,</span> <br /> <span className="text-3xl text-orange">front - end разработчик</span>, <br /> хочу представить вам мое портфолио. <pre className="text-[grey]">&lt;/h1&gt;</pre></h1>
              <div className="text-sm mt-3 flex justify-end">
                <a onClick={e => e.stopPropagation()} className="flex gap-2 items-center hover:scale-110 transition-all group" title="напишите мне" aria-label="напишите на почту Алексею" href="mailto:zukko961@gmail.com">
                  <span className="bg-clip-text text-transparent text-border group-hover:text-orange transition-all duration-300 tracking-widest">напишите мне</span> 
                  <div className="relative">
                    <Image src={Gmail} width={30} height={30} alt="gmail почта Алексей Тихонов"/>
                  </div> 
                </a>
              </div> 
          </div>
          <div className={`absolute w-full h-full z-10 flex flex-col back text-sm ${rotate ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
            <div>
              <pre className="text-[grey]">&lt;p&gt;</pre>
                  C января 2021 года я начал обучаться на курсах ЯндексПрактикум, по направлению<span className="text-orange block">front-end разработчик.</span> На курсах я изучал верстку, работу с макетами figma, настраивал логику сайта. Работал с back-end для front-end разработчика.
                  <br /> Изучил JavaScript и React. <br /> Изучаю Redux Toolkit, Typescript. <br /> Делаю пет проекты и выкладываю их на свой аккаунт <span className="text-orange">GitHub. <br /> Все свои работы делаю адаптивными под все браузеры и устройства.</span>
              <pre className="text-[grey]">&lt;/p&gt;</pre>
            </div>
          </div>
        </div>

      </div>
      <div className="relative">
        <div className="absolute -top-10 text-sm flex justify-between w-full">
          <Link className={`${rotate ? 'animate-bounce' : 'animate-none'}`} title="Посмотреть диплом" aria-label="Посмотреть диплом" href={'https://disk.yandex.ru/i/HH4kMPGDHV-CAw'} >Диплом ЯП</Link>
          <Link className={`${rotate ? 'animate-bounce' : 'animate-none'}`} title="Посмотреть все проекты" aria-label="Посмотреть все проекты" href={'https://github.com/mamasha59'} >GitHub</Link>
        </div>
        <Image src={img1} width={300} alt="картинка алеши" className="shadow-xl z-30 bg-orange"/>
      </div>
      <div onClick={()=>scrollToSection(scrollTo)} title="скрол вниз" className="absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[100%] w-5 h-8 border rounded-md cursor-pointer overflow-hidden">
        <span className="flex justify-center items-center text-sm p-1 text-orange animate-bounce border-b border-blue-300">&darr;</span>
      </div>
    </div>
  )
};

export default Main;