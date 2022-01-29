import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

import {ReactComponent as ShoppingCart } from './icons/shopping-cart.svg'
import {ReactComponent as DigikalaIco} from './icons/Digikala.svg'
import UserPic from './icons/user-6767.png'
import './style.css'


const UpperHeader = ({shadow}) => {

    const shadowdata = "0 7px 8px 0 rgb(0 0 0 / 0.4)";
    
    const navigate = useNavigate();
    const isLogged = useSelector(state => state.loginStatus.logged)
    
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
                { isLogged ? 
                <div className=''>
                    <img src={UserPic} className="userPic" alt=""></img>
                </div>
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
                </a>
            </div>    
        </div>
        )
}

export default UpperHeader
