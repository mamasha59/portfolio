import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import Ship from "../../img/alienShip.svg";
import React from "react";
import { useAppDispatch } from "@/app/Store/hooks";
import { switchTheme } from "@/app/Store/slices/commonSlice";

interface SplashScreenProps {
  finish: Dispatch<SetStateAction<boolean>>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finish }) => {

  const dispatch = useAppDispatch()

  useEffect(() => { // лоудинг скрин
   const timeOut =  setTimeout(() => {
      finish(false);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [finish]);

  useEffect(() => { // выбрана ли светлая тема
    if(window.localStorage.getItem('isDark') === 'false'){
      dispatch(switchTheme())
    }
  },[dispatch, switchTheme])

  return (
    <div
      title="загрузочный экран, подождите"
      aria-label="загрузочный экран, подождите"
      className="flex justify-center items-center p-4 animate-appear flex-col relative"
    >
      <Image
        priority
        src={Ship}
        width={350}
        height={300}
        className="flex items-center w-auto justify-center animate-goShip"
        alt="загрузочный экран"
      />
    </div>
  );
}

export default SplashScreen;
