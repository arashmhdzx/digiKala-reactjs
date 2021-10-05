/* eslint-disable react-hooks/rules-of-hooks */
import {useState,useCallback,useEffect} from 'react'

const scrollDirection = () => {
    const [y, setY] = useState(window.scrollY);
    const [isShow, setIsShow] =useState(false)
    const handleNavigation = useCallback(
      (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          setIsShow(false)
        } else if (y < window.scrollY) {
          setIsShow(true)
        }
        setY(window.scrollY);
      },
      [y]
    );
  
    useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
  
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);
    
    return isShow;
}

export default scrollDirection
