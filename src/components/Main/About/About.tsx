import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import ButtonEmail from "./ButtonEmail";
import { changeRotate, commonState } from "@/app/Store/slices/commonSlice";
import { languages } from "@/lang/lang";

interface AboutProps{
    show: boolean;
}

const About:React.FC<AboutProps> = ({show}) => {
  
  const state = useAppSelector(commonState);
  const dispatch = useAppDispatch();
  const text = languages.main[state.langDefault]; // текст статически меняется на рус/eng

  return (
    <div onClick={()=> dispatch(changeRotate(!state.valueRotate))} className={`z-20 flex max-w-[448px] w-full perspective midl:absolute midl:w-full midl:h-full midl:top-2 midl:backdrop-blur-sm ${show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} transition-all`}>
    <div className={`inner w-full h-full transition-all duration-700 relative ${state.valueRotate ? 'inner back' : ''}`}>

      <div className="absolute w-full h-full z-20 flex flex-col cursor-pointer">
        <h1 className="max-w-md">
          <pre className="text-[grey]">&lt;h1&gt;</pre>
            {text.welcome}<span className={`text-3xl ${state.isDark ? 'text-blue-300' : 'text-lightModeT'} `}>{text.name}</span><br/>
            <span className="text-3xl text-orange">{text.business}</span>,<br />
            {text.introduce}
          <pre className="text-[grey]">&lt;/h1&gt;</pre>
        </h1>
        <ButtonEmail text={text.about.email}/>  
      </div>

      <div className={`absolute w-full h-full z-10 flex flex-col back text-sm ${state.valueRotate ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
        <div className="midl:text-base sl:text-sm">
          <pre className="text-[grey]">&lt;p&gt;</pre>
            {text.about.start}
            <span className="text-orange block">{text.business}.</span>
            {text.about.next}<br/>
            {text.about.firstbr}<br/>{text.about.secbr}<br/>
            {text.about.thirdbr}
            <span className="text-orange">GitHub.<br/>{text.about.note}</span>
          <pre className="text-[grey]">&lt;/p&gt;</pre>
        </div>
      </div>

    </div>
  </div>
  )
};

export default About;
