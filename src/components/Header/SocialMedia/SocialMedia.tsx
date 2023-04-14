import Link from "next/link";
import Instagram from '../../../img/icons/instagram.svg';
import Telegram from '../../../img/icons/telegram.svg';
import Image from "next/image";
import Facebook from '../../../img/icons/facebook.svg';
import Git from '../../../img/icons/github.svg';
import { useEffect, useState } from "react";

const SocialMedia:React.FC = () => {

    const [show, setShow] = useState(false);

  useEffect(()=>{
    setTimeout(()=> setShow(true),500);
  },[])

  return (
    <div className={`p-1 absolute left-5 top-0 bg-[#223223] flex items-center gap-6 rounded-md flex-col max-w-[50px] ${show ? 'opacity-100 animate-bounceOnce' : 'opacity-0'} transition-opacity duration-100 border`}>
        <Link className="hover:opacity-70 transition-all" title="инстаграмм Алексей Тихонов" aria-label="инстаграмм Алексей Тихонов" href={"https://www.instagram.com/clerictihonov/"}>
        <Image
            src={Instagram}
            width={40} height={40}
            className="m-0 "
            alt="инстаграмм Алексей Тихонов"
        />
        </Link>

        <Link className="hover:opacity-70 transition-all" title="телеграм Алексей Тихонов" aria-label="телеграм Алексей Тихонов" href={"https://t.me/IsSomethin"}>
        <Image
            src={Telegram}
            width={40} height={40}
            className="m-0 "
            alt="телеграм Алексей Тихонов"
        />
        </Link>

        <Link className="hover:opacity-70 transition-all" title="фейсбук Алексей Тихонов" aria-label="фейсбук Алексей Тихонов" href={"https://www.facebook.com/profile.php?id=100010891502668"}>
        <Image
            src={Facebook}
            width={40} height={40}
            className="m-0 "
            alt="фейсбук Алексей Тихонов"
        />
        </Link>

        <Link className="hover:opacity-70 transition-all" title="гитхаб Алексей Тихонов" aria-label="фейсбук Алексей Тихонов" href={"https://github.com/mamasha59"}>
        <Image
            src={Git}
            width={40} height={40}
            className="m-0 bg-blue-300 rounded-full"
            alt="гитхаб Алексей Тихонов"
          />
        </Link>
        <p className="bg-orange text-[#000] w-28 rounded-sm text-sm rotate-90 border translate-y-9">Follow me</p>
  </div>
  )
};

export default SocialMedia;
