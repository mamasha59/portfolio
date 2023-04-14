"use client"
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Tech from "../Tech/Tech";
import { RefObject, useState } from "react";

interface HeadProps{
  element: RefObject<HTMLElement>;
}

const Head:React.FC<HeadProps> = ({element}) => {
  
  const [rotate, setRotate] = useState(false); // состояние блока о себе, ротате

  return (
    <header className="h-screen snap-center relative flex justify-between flex-col">
        <Header scrollTo={element} rotateState={[rotate, setRotate]}/>
        <Main scrollTo={element} rotateState={[rotate, setRotate]}/>
        <Tech/>
        <div className="absolute top-0 w-full h-full -z-[5]">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1.2}/>
            <directionalLight position={[3,3,3]}/>
            <Sphere args={[1,200,300]} scale={1}>
                <MeshDistortMaterial color={'#0988e8'} attach={'material'} distort={.7} speed={2}/>
            </Sphere>
          </Canvas>
        </div>
    </header>
  )
};

export default Head;
