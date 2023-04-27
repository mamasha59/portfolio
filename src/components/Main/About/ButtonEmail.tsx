import { useAppSelector } from '@/app/Store/hooks';
import Gmail from '../../../img/icons/gmail.svg';
import Image from "next/image";
import { commonState } from '@/app/Store/slices/commonSlice';

interface ButtonEmailProps {
  text: string;
}

const ButtonEmail:React.FC<ButtonEmailProps> = ({text}) => {

  const state = useAppSelector(commonState);

  return (
    <div className='flex items-center hover:scale-110 transition-all group text-sm mt-3 justify-end z-50' onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
      <a
        title={state.langDefault === 'rus' ? 'напишите мне' : 'email me'}
        aria-label={state.langDefault === 'rus' ? 'напишите мне на почту' : 'email me'}
        href="mailto:zukko961@gmail.com"
        className={`${state.isDark ? 'text-border-dark' : 'text-border-light'} flex bg-clip-text text-transparent group-hover:text-orange transition-all duration-300 tracking-widest`}
      >
      {text}
      <Image
        src={Gmail}
        width={30}
        height={30}
        alt={state.langDefault === 'rus' ? 'иконка почты' : 'email\s icon'}
        className='ml-2'
      />
      </a>
    </div>
  );
};

export default ButtonEmail;
