import React from 'react';
import {ReactComponent as Plus} from './icons/plus.svg'
import {ReactComponent as HamburgerIco} from './icons/hamburger-menu.svg'
import {ReactComponent as Discount } from "./icons/discount.svg";
import {ReactComponent as Prize } from './icons/prize.svg';
import {ReactComponent as Grocery} from './icons/grocery.svg';
import {ReactComponent as Club } from './icons/club.svg';
import {ReactComponent as OnlinePay} from './icons/cashless-payment.svg';
import {ReactComponent as Pin } from './icons/place.svg';
import './style.css'

const DownerHeader = () => {
    
    return (
        <div className="downerHeader-container" >
            

                <div className="menu-section">

                    <ul className="menu-container">


                       <li className="categories-container">
                           <div className="innerMenu">
                                <div className="menuIcon-container">
                                    <HamburgerIco />
                                </div>
                                <p className="menu-text"> دسته بندی کالاها</p>
                            </div>
                        </li>
                        <li className="verticalDown" style={{listStyle:"none"}}/>
                        <li className="categories-container">
                            <div className="innerMenu" >
                                <div className="menuIcon-container">
                                    <Grocery />
                                </div>
                                <p className="menu-text">سوپرمارکت</p>
                           </div>
                        </li>
                        <li className="categories-container">
                            <div className="innerMenu">
                                <div className="menuIcon-container">
                                    <Discount />
                                </div>
                                <p className="menu-text">تخفیف ها و پیشنهاد&zwnj;ها</p>
                           </div>
                        </li>
                        <li className="categories-container">
                            <a className="innerMenu" href="/mydigikala">
                                <div className="menuIcon-container">
                                    <Prize />
                                </div>
                                <p className="menu-text">دیجی&zwnj;کالای من</p>
                           </a>
                        </li> 
                        <li className="categories-container">
                            <div className="innerMenu" >
                                <div className="menuIcon-container">
                                    <Plus />
                                </div>
                                <p className="menu-text">دیجی&zwnj;پلاس</p>
                           </div>
                        </li>
                        <li className="categories-container">
                            <div className="innerMenu" >
                                <div className="menuIcon-container">
                                    <Club />
                                </div>
                                <p className="menu-text">دیجی&zwnj;کلاب</p>
                           </div>
                        </li> 
                        <li className="categories-container">
                            <div className="innerMenu" >
                                <div className="menuIcon-container">
                                    <OnlinePay />
                                </div>
                                <p className="menu-text">دیجی&zwnj;پی</p>
                           </div>
                        </li>
                    </ul>
                </div>

                {/* <li className="downerEmptyArea"></li> */}

                <div className="GPS-container">
                    <a className="gpsMenu" href="/">
                        <p className="menu-text">لطفا شهر و استان خود را انتخاب کنید</p>
                        <div className="gps-icon">
                            <Pin />
                        </div>
                    </a>
                </div>
            
        </div>
    )
}

export default DownerHeader
