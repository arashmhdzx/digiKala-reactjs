import React, { useEffect ,useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

import useComponentVisible from '../../../hooks/componentVisible';

import { BiTime ,BiTrash,BiChevronLeft } from 'react-icons/bi'
import { AiOutlineFire,AiOutlineLeft } from 'react-icons/ai'
import {ReactComponent as ShoppingCart } from './icons/shopping-cart.svg'
import {ReactComponent as DigikalaIco} from './icons/Digikala.svg'
import club from '../downerHeader/icons/club.svg'
import UserPic from './icons/user-6767.png'


import './style.css'
// import { logOut } from '../../../store/slices/loginStatusSlice';


const UpperHeader = ({ shadow }) => {

    const shadowdata = "0 7px 8px 0 rgb(0 0 0 / 0.4)";
    
    const navigate = useNavigate();
    const inputRef = useRef();
    const isLogged = useSelector(state => state.loginStatus.isLog);
    const [profileToggle, setProfileToggle] = useState(false);
    const [searchBox, setSearchBox] = useState(false);
    const [cartLength, setCartLength] = useState(0);
    const mostSearch = ["روغن سمن","باطری کلیمتون","پیرهن هاوایی","Iphone"]
    const recentSearch = ["سامسونگ","تلوزیون","مچ بند","Iphone","لپتاپ"]

    // const handleClickOutside = e => {
    //     if (!wrapperRef.current.contains(e.target)) {
    //         setProfileToggle(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    // });
    // console.log(JSON.parse(localStorage.getItem("user")))
    // var y = JSON.parse(localStorage.getItem("user"))
    // var z = y["cart"]
    // // setCartLength(z.length)
    // useEffect(() => {
    //     setCartLength(z.length)
    // }, [])
    
    // useEffect(() => {
    //     setCartLength(z.length)
    // }, [])
    
    const concernedElement = document.querySelector(".search-box");
    const profileModal = document.querySelector(".toggle-profile-wrapper");
    
document.addEventListener("mousedown", (event) => {
  if (concernedElement?.contains(event.target)) {
  } else {
        setSearchBox(false)
  }
});
document.addEventListener("mousedown", (event) => {
  if (profileModal?.contains(event.target)) {
  } else {
        setProfileToggle(false)
  }
});
    
    useEffect(()=>{
        const buttonSelector = document.getElementById("el");
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
    
    function focus () {
        inputRef.current.focus()
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
                navigate("/products/q="+inputRef.current.value)
                window.location.reload()
        }
      }
    return (
        
        <div className="upperHeader-container" style={{boxShadow: shadow ? shadowdata : ""}} > {/* style={isShow ? { display: 'none' } : {} } */}
            <div className='search-wrapper ju-bet'>
                    <div  className='flex'>
                        <div className="logo-container">
                        <div onClick={()=>navigate("/")} className="logo" alt="دیجی کالا">
                                <DigikalaIco />
                        </div>
                        </div>
                        <div className="search-container">
                        {/*<span class="fa fa-search form-control-feedback"></span>*/}
                                <div 
                                onClick={()=>{setSearchBox(true);}}
                                className={`search-box ${searchBox && "active-searchbar"} `}
                                >
                                        <input type="search" className={`searchBox ${searchBox && "activeSearchInput"}`}
                                        ref={inputRef} onKeyDown={handleKeyDown}
                                        placeholder="جستجو در دیجی&zwnj;کالا …"
                                        dir="rtl" align="right"  />

                                        { searchBox && <div className='search py-16'>
                                                <div></div>
                                                <div className='flex flex-col'>
                                                        <div className='flex ju-bet py-8'>
                                                                <div className='flex'>
                                                                        <div className='flex ai-center f-24p ml-24'><BiTime fill='#a1a3a8'/></div>
                                                                        <div>آخرین جستجوهای شما</div>
                                                                </div>
                                                                <div className='flex ai-center f-24p ml-24'><BiTrash fill='#a1a3a8'/></div>
                                                        </div>
                                                        <div className='flex pr-32'>
                                                            {recentSearch.map(data => (
                                                                <div className='flex ai-center ml-12 border p-suggest' style={{borderRadius:"24px"}}>
                                                                    <div className='flex ml-16'>{data}</div>
                                                                    <AiOutlineLeft/>

                                                                </div>
                                                            ))}
                                                        </div>
                                                </div>
                                                <div className='flex flex-col'>
                                                        <div className='flex py-8'>
                                                                <div className='flex ai-center f-24p ml-24'><AiOutlineFire fill='#a1a3a8'/></div>
                                                                <div>جستجوهای پرطرفدار</div>
                                                        </div>
                                                        <div className='flex pr-32'>
                                                        {mostSearch.map(data => (
                                                                <div className='flex ai-center ml-12 border p-suggest' style={{borderRadius:"24px"}}>
                                                                    <div className='flex ml-16'>{data}</div>
                                                                    <AiOutlineLeft/>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div>
                                                                <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/df6f7e02609f6f14f15a0de5876539ac89afc23d_1645968447.jpg?x-oss-process=image/quality,q_95"
                                                                        alt='پیشنهاد روزانه' className='search-image my-16'
                                                                />
                                                        </div>
                                                </div>
                                        </div>}
                                </div>
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
                
                <div className={`toggle-profile-wrapper ${ profileToggle && "p-open"} `} >
                    <div className='dropdown-profile-user row-line ' onClick={()=>{navigate("/profile");setProfileToggle(false)}}>
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
                    <div className="dropdown-items-style row-line" onClick={()=>navigate("/profile/orders")}>
                        <img src="https://img.icons8.com/office/50/000000/purchase-order.png" alt="order" width="18px" height="18px" />
                        <p className='dropdown-profile-titles'>سفارش‌های من</p>
                    </div>
                    <div className="dropdown-items-style row-line" onClick={()=>navigate("/digiclub/rewards")} >
                        <img src={club} alt="club" width="18px" height="18px" />
                        <p className='dropdown-profile-titles'>جوایز دیجی‌کلاب</p>
                    </div>
                    <div className="dropdown-items-style row-line" onClick={()=>{logout();setProfileToggle(false)}} >
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
                    {
                        cartLength>0 &&
                        <div className='badge'>{cartLength}</div>
                    }
                </a>
            </div>    
        </div>
        </div>
        )
}

export default UpperHeader
