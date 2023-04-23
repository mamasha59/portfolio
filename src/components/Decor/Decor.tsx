import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import dynamic from "next/dynamic";
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then((module) => ({ default: module.Canvas })), { ssr: false });

const Decor = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-full -z-[1]">
    <DynamicCanvas>
      <mesh>            
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1.2}/>
      <directionalLight position={[3,3,3]}/>
      <Sphere args={[1,200,300]} scale={1}>
          <MeshDistortMaterial color={'#0988e8'} attach={'material'} distort={.7} speed={2}/>
      </Sphere>
      </mesh>
    </DynamicCanvas>
  </div>
  )
};

export default Decor;
