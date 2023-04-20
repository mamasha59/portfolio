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
    <div title="загрузочный экран, подождите" aria-label="загрузочный экран, подождите" className="flex justify-center items-center p-4 animate-appear flex-col relative">
        <Image priority src={Ship} width={350} height={300} className="flex items-center w-auto justify-center animate-goShip" alt="загрузочный экран"/>
        <div className="w-[50vw] h-[20vh] rounded-full flex items-center justify-center">
        </div>
    </div>
  )
};

export default SplashScreen;
