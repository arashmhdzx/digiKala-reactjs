import React, { useEffect ,useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import {ReactComponent as ShoppingCart } from './icons/shopping-cart.svg'
import {ReactComponent as DigikalaIco} from './icons/Digikala.svg'
import club from '../downerHeader/icons/club.svg'
import UserPic from './icons/user-6767.png'
import './style.css'
// import { logOut } from '../../../store/slices/loginStatusSlice';


const UpperHeader = ({ shadow }) => {

    const shadowdata = "0 7px 8px 0 rgb(0 0 0 / 0.4)";
    
    const navigate = useNavigate();
    const isLogged = useSelector(state => state.loginStatus.isLog);
    const [profileToggle, setProfileToggle] = useState(false);

    const handleClickOutside = e => {
        if (!wrapperRef.current.contains(e.target)) {
            setProfileToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });
    
    
    useEffect(()=>{
        const buttonSelector = document.getElementById("el");
        console.log(buttonSelector);
        const clickToggle = (e) =>{
                e.preventDefault();
                buttonSelector.classList.toggle("actived-profile-btn");
                setProfileToggle(prev => !prev)
            }
        buttonSelector?.addEventListener("click",clickToggle);
    },[isLogged])

    
        
    function logout (){
        localStorage.clear();
        navigate("/");
        window.location.reload();
    }
    
    const wrapperRef = useRef(null);
    

    return (
        
        <div className="upperHeader-container" style={{boxShadow: shadow ? shadowdata : ""}} > {/* style={isShow ? { display: 'none' } : {} } */}
            <div className='search-wrapper'>
                <div className="logo-container">
                    <div onClick={()=>navigate("/")} className="logo" alt="دیجی کالا">
                        <DigikalaIco />
                    </div>
                </div>
                <div className="search-container">
                    {/*<span class="fa fa-search form-control-feedback"></span>*/}
                    <input type="search" className='searchBox'
                    /*  ${isActive ? 'isActiveSearch' : ""}`} onClick={() => setIsActive(!isActive) */
                    placeholder="جستجو در دیجی&zwnj;کالا …"
                    dir="rtl" align="right"  />
                </div>
            </div>
                
            <div className="login-container">
                { isLogged ? <>
                <div className='profile-wrapper'>
                    <div className='profile-btn' id='el'>
                        <img src={UserPic} className="userPic" style={{margin:"0",padding:"0 2px"}} alt=""></img>
                        <span className='arrow-head-dropdown'>&#9660;</span>
                    </div>
                </div>
                
                <div ref={wrapperRef} className={`toggle-profile-wrapper ${ profileToggle && "p-open"} `} >
                    <div className='dropdown-profile-user' onClick={()=>navigate("/profile")}>
                        <div className='dropdown-profile-info-wrapper'>
                            <div>
                                <img src="https://www.digikala.com/static/files/fd4840b2.svg" width="30" height="30" className='dropdown-profile-pic' alt='profile-pic' />
                            </div>
                            <div className='dropdown-profile-titles'>
                                <p className='dropdown-profile-username-text'>آرش مهدیزاده</p>
                                <p className='dropdown-profile-linkto-text'>مشاهده حساب کابری ❱</p>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-items-style" onClick={()=>navigate("/profile/orders")}>
                        <img src="https://img.icons8.com/office/50/000000/purchase-order.png" alt="order" width="18px" height="18px" />
                        <p className='dropdown-profile-titles'>سفارش‌های من</p>
                    </div>
                    <div className="dropdown-items-style" onClick={()=>navigate("/digiclub/rewards")} >
                        <img src={club} alt="club" width="18px" height="18px" />
                        <p className='dropdown-profile-titles'>جوایز دیجی‌کلاب</p>
                    </div>
                    <div className="dropdown-items-style" onClick={logout} >
                        <img src="https://img.icons8.com/ios/50/000000/exit.png" width="18px" height="18px" alt="logout"/>
                        <p className='dropdown-profile-titles'>خروج از حساب کاربری</p>
                    </div>
                </div>
                
                </>
                : 
                <div onClick={() => navigate('/user/login-register')} className="loginSection">
                    <div className="userPic-container">
                        <img src={UserPic} className="userPic" alt=""></img>
                    </div>
                    <div  className="userText-container">
                        <p className="usertext">ورود به حساب کاربری</p>
                    </div>
                    
                </div>}

                <div className="vertical"></div>
                <a href="/cart" className="shoppingCart" >
                    <ShoppingCart />
                    <div className='badge'>2</div>
                </a>
            </div>    
        </div>
        )
}

export default UpperHeader
