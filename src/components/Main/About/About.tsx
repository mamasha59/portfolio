import ButtonEmail from "./ButtonEmail";

interface AboutProps{
    rotateState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    show: boolean;
}

const About:React.FC<AboutProps> = ({rotateState,show}) => {

    const [rotate, setRotate] = rotateState;

  return (
    <div onClick={()=> setRotate(!rotate)} className={`flex max-w-[448px] w-full perspective midl:absolute midl:w-full midl:h-full midl:top-2 midl:backdrop-blur-sm ${show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all`}>
    <div className={`inner w-full h-full transition-all duration-700 relative ${rotate ? 'inner back' : ''}`}>
      <div className="absolute w-full h-full z-20 flex flex-col cursor-pointer">
        <h1 className="max-w-md"> <pre className="text-[grey]">&lt;h1&gt;</pre> Привет, меня зовут <span className="text-3xl text-blue-300">
          Алексей Тихонов,</span> <br /> <span className="text-3xl text-orange">front - end разработчик</span>, <br /> хочу представить вам мое портфолио. <pre className="text-[grey]">&lt;/h1&gt;</pre></h1>
          <ButtonEmail/>  
      </div>
      <div className={`absolute w-full h-full z-10 flex flex-col back text-sm ${rotate ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
        <div className="midl:text-base sm:text-sm">
          <pre className="text-[grey]">&lt;p&gt;</pre>
              C января 2021 года я начал обучаться на курсах ЯндексПрактикум, по направлению<span className="text-orange block">front-end разработчик.</span> Изучал верстку, figma, настраивал логику сайта. Работал с back-end для front-end.
              <br /> Изучил JavaScript и React. <br /> Изучаю Redux Toolkit, Typescript. <br /> Делаю пет проекты и выкладываю на аккаунт <span className="text-orange">GitHub. <br /> Все свои работы делаю адаптивными под все браузеры и устройства.</span>
          <pre className="text-[grey]">&lt;/p&gt;</pre>
        </div>
      </div>
    </div>
  </div>
  )
};

export default About;
