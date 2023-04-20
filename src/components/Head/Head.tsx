"use client"
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Tech from "../Tech/Tech";
import { RefObject, useState } from "react";

interface HeadProps{
  refPortfolio: RefObject<HTMLElement>;
  refHead: RefObject<HTMLElement>;
}

const Head:React.FC<HeadProps> = ({refPortfolio,refHead}) => {
  
  const [rotate, setRotate] = useState(false); // состояние блока о себе, rotate

  return (
    <header ref={refHead} className="h-screen px-3 py-4 snap-center relative flex justify-between flex-col">
        <Header scrollTo={refPortfolio} rotateState={[rotate, setRotate]}/>
        <Main scrollTo={refPortfolio} rotateState={[rotate, setRotate]}/>
        <Tech/>
        <div className="absolute top-0 left-0 right-0 w-full h-full -z-[5]">
          <Canvas>
            <mesh>            
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1.2}/>
            <directionalLight position={[3,3,3]}/>
            <Sphere args={[1,200,300]} scale={1}>
                <MeshDistortMaterial color={'#0988e8'} attach={'material'} distort={.7} speed={2}/>
            </Sphere>
            </mesh>
          </Canvas>
        </div>
    </header>
  )
};

export default Head;
