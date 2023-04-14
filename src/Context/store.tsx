'use client';
import { MutableRefObject, createContext, useRef, useContext } from "react";

interface ContextProviderProps{
    children: React.ReactNode;
  }

const GlobalContext = createContext({});

export const ContextProvider:React.FC<ContextProviderProps> = ({children}) => {
    const ref = useRef< MutableRefObject<HTMLElement>>(null);

 return (
    <GlobalContext.Provider value={ref}>
        {children}
    </GlobalContext.Provider>
 )
}

export const useGlobalContext = () => useContext(GlobalContext);