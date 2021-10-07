import React from 'react'
import { ReactComponent as Prize } from './prize.svg'
import { ReactComponent as Login } from './login.svg'

import './style.css'

const SingleLoginCart = () => {
    return (
        <div className="singleLoginCart-container">
            <div>
                <Prize />
            </div>
            <h3 class="single-login-box__title">شخصی‌سازی پیشنهادها!</h3>
            <p class="single-login-box__text">
                برای مشاهده پیشنهادهای مناسب خود و همچنین داشتن تجربه بهتر لطفا وارد حساب کاربری شوید.
            </p>
            <a className="loginBtnCart" href="/users/user-registertion">
                <div className="loginbox-icon">
                    <Login />
                </div>
                <div className="loginBtn-text">
                    ورود به حساب دیجی کالا
                </div>
            </a>
            <a className="loginbox-underBtn" href="/users/users-register/">ثبت‌نام رایگان در صورت نداشتن حساب کاربری</a>
        </div>
    )
}

export default SingleLoginCart
