"use client"
import Link from "next/link";
import { redirect } from "next/navigation";

const NotFound:React.FC = () => {

  return (
  <div className="text-[#fff] flex justify-center flex-col gap-5 items-center h-screen text-2xl px-4">
    <p className="text-center">Кажется по такому адрессу ничего нет!</p>
    <Link onClick={()=> redirect('/')} className="text-base capitalize text-[red] hover:scale-125 transition-all" href={'/'}>Назад</Link>
  </div>
  )
};

export default NotFound;
