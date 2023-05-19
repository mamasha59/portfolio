'use client'
import Image from "next/image";
import Ship from "../img/alienShip.svg";

const SplashScreen: React.FC = () => {

  return (
    <div title="загрузочный экран, подождите" className="bg-[#000] flex justify-center items-center p-4 animate-appear flex-col relative">
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
