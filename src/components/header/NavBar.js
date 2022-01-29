/* eslint-disable react-hooks/rules-of-hooks */
import React, {
    useCallback,
    useEffect,
    useState
} from 'react'
//import ScrollDirection from "../../hooks/scrollDirection";
import UpperHeader from './upperHeader/upperHeader'
import DownerHeader from './downerHeader/downerHeader'
import './style.css'

const index = () => {
    const [y, setY] = useState(window.scrollY);
    const [isShow, setIsShow] = useState(false)
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
    return ( 
        <header className = "header-container header-shadow" >
        
        <UpperHeader / > {
            isShow ? null : < DownerHeader / >
        }

        
        </header>
    )
}

export default index