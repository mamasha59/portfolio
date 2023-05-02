import SocialMedia from "./SocialMedia/SocialMedia";
import { RefObject, useEffect, useState } from "react";
import About from "./About/About";
import UserPhoto from "./UserPhoto/UserPhoto";
import ScrollPortfolio from "./ScrollPortfolio/ScrollPortfolio";
import { useAppDispatch } from "@/app/Store/hooks";
import {  switchLang } from "@/app/Store/slices/commonSlice";

interface MainProps{
  scrollTo: RefObject<HTMLElement>,
}

const Main:React.FC<MainProps> = ({scrollTo}) => {
  
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  const langClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = e.currentTarget as HTMLButtonElement;
    dispatch(switchLang(buttonValue.value));
  }

  useEffect(() => {
    setShow(true);
  },[show])

  return (
    <div className="pt-3 w-full max-h-[500px] h-full flex justify-around relative lg:pt-3 midl:p-0">
      <SocialMedia show={show}/>
      <About show={show}/>
      <UserPhoto show={show}/>
      <ScrollPortfolio scrollTo={scrollTo}/>
      <div className="fixed right-0 z-30 text-xs flex flex-col gap-2">
        <button title="eng" onClick={langClick} value='eng'>ENG</button>
        <button title="rus" onClick={langClick} value='rus'>RUS</button>
      </div>
    </div>
  )
};

export default Main;