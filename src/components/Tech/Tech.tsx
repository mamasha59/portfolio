import Image from "next/image";
import HTML from "../../img/icons/html.svg";
import CSS from "../../img/icons/css.svg";
import JavaScript from "../../img/icons/js.svg";
import ReactIcon from "../../img/icons/react.svg";
import Link from "next/link";

const Tech:React.FC = () => {

  return (
      <ul className="flex w-full justify-evenly z-20 py-1 border my-4 rotate-1 bg-[#223223] text-white sm:text-xs">
        <li>
          <Link
            title="перейти к проекту"
            aria-label="перейти к проекту что использует html"
            href={"https://russian-travel-lime.vercel.app/"}
            className="flex flex-col midl:items-center"
          >
            <Image src={HTML} width={30} height={30} alt="HTML" />
            HTML.
          </Link>
        </li>
        <li>
          <Link
            title="перейти к проекту"
            aria-label="перейти к проекту что использует CSS"
            href={"https://how-to-learn-five.vercel.app/"}
            className="flex flex-col midl:items-center"
          >
            <Image src={CSS} width={30} height={30} alt="CSS" />
            CSS.
          </Link>
        </li>
        <li>
          <Link
            title="перейти к проекту"
            aria-label="перейти к проекту что использует JS"
            href={"https://github.com/mamasha59/react-mesto-api-full"}
            className="flex flex-col midl:items-center"
          >
            <Image
              src={JavaScript}
              width={30}
              height={30}
              alt="JavaScript"
            />
            JavaScript.
          </Link>
        </li>
        <li>
          <Link
            title="перейти к проекту"
            aria-label="перейти к проекту что использует React"
            href={"https://mamasha59.github.io/mesto/"}
            className="flex flex-col midl:items-center"
          >
            <Image src={ReactIcon} width={30} height={30} alt="React" />
            React.
          </Link>
        </li>
      </ul>
  );
};

export default Tech;
