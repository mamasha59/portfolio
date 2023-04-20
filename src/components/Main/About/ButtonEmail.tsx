import Gmail from '../../../img/icons/gmail.svg';
import Image from "next/image";

const ButtonEmail:React.FC = () => {
  return (
    <div className='flex items-center hover:scale-110 transition-all group text-sm mt-3 justify-end z-50' onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
      <a
        title="напишите мне"
        aria-label="напишите на почту Алексею"
        href="mailto:zukko961@gmail.com"
        className='flex bg-clip-text text-transparent text-border group-hover:text-orange transition-all duration-300 tracking-widest'
      >
      напишите мне
      <Image
        src={Gmail}
        width={30}
        height={30}
        alt="gmail почта Алексей Тихонов"
        className='ml-2'
      />
      </a>
    </div>
  );
};

export default ButtonEmail;
