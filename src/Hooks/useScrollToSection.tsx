import { RefObject } from "react";

const useScrollToSection = () => {
    
    const scrollToSection = (element:RefObject<HTMLElement>,where?:string) => {
        if(element && element.current){          
          window.scrollTo({
            top: where === 'top' ? element.current.offsetTop : element.current.offsetTop + element.current.offsetHeight,
            behavior: "smooth"
          })
        } 
      }
      return scrollToSection;
};

export default useScrollToSection;
