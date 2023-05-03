import dynamic from "next/dynamic";
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then((module) => ({ default: module.Canvas })), { ssr: false });

interface CanvasesProps{
    children: React.ReactNode;
}

const Canvases:React.FC<CanvasesProps> = ({children}) => {
  return (
    <DynamicCanvas>
        {children}
    </DynamicCanvas>
  )
};

export default Canvases;