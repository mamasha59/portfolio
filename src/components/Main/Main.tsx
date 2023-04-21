import SocialMedia from "../Header/SocialMedia/SocialMedia";
import { RefObject, useEffect, useState } from "react";
import About from "./About/About";
import UserPhoto from "./UserPhoto/UserPhoto";
import ScrollPortfolio from "./ScrollPortfolio/ScrollPortfolio";

interface MainProps{
  scrollTo: RefObject<HTMLElement>,
  rotateState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Main:React.FC<MainProps> = ({scrollTo,rotateState}) => {
  
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true)
  },[])

  return (
    <div className="pt-3 w-full max-h-[500px] h-full flex justify-around relative lg:pt-3 midl:p-0">
      <SocialMedia show={show}/>
      <About show={show} rotateState={rotateState}/>
      <UserPhoto show={show} rotateState={rotateState}/>
      <ScrollPortfolio scrollTo={scrollTo}/>
    </div>
  )
};

export default Main;