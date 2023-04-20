import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import Ship from '../../img/alienShip.svg';

interface SplashScreenProps {
    finish: Dispatch<SetStateAction<boolean>>,
}

const SplashScreen:React.FC<SplashScreenProps> = ({finish}) => {

    useEffect(()=>{
        setTimeout(()=>{
            finish(false)
        },500)
    })

  return (
    <div className="flex justify-center items-center p-4 animate-appear flex-col relative">
        <Image src={Ship} width={350} height={300} className="flex items-center justify-center animate-goShip" alt="загрузочный экран"/>
        <div className="w-[50vw] h-[20vh] rounded-full flex items-center justify-center">
        </div>
    </div>
  )
};

export default SplashScreen;
