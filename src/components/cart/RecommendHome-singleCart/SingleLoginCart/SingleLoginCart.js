import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as Prize } from './prize.svg'
import { ReactComponent as Login } from './login.svg'

import './style.css'

const SingleLoginCart = () => {

    const navigate = useNavigate() 

    return (
        <div className="singleLoginCart-container">
            <div>
                <Prize />
            </div>
            <h3 class="single-login-box__title">شخصی‌سازی پیشنهادها!</h3>
            <p class="single-login-box__text">
                برای مشاهده پیشنهادهای مناسب خود و همچنین داشتن تجربه بهتر لطفا وارد حساب کاربری شوید.
            </p>
            <div className="loginBtnCart" onClick={() => navigate("/user/login-register")} >
                <div className="loginbox-icon">
                    <Login />
                </div>
                <div className="loginBtn-text">
                    ورود به حساب دیجی کالا
                </div>
            </div>
            <div className="loginbox-underBtn">ثبت‌نام رایگان در صورت نداشتن حساب کاربری</div>
        </div>
    )
}

export default SingleLoginCart
