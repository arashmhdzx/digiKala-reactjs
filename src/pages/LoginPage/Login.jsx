import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import './loginStyles.css'

const Login = () => {

    const navigate = useNavigate();

    const [ userName, setUserName ] = useState("");
    const [ emailNotExistError, setEmailNotExistError ] = useState(false);
    const [ validInput, setValidInput ] = useState(false);
    

    // const { user } = useSelector(state => state.userToken.userName);


    
    
    const handleEmailError = () => {
        alert("حساب کاربری برای این ایمیل وجود ندارد. برای ایجاد حساب کاربری جدید لطفا شماره تماس خود را وارد نمایید.");
    }
    const handleToConfirmPage = () => {
        const storageData = { userName : userName }
        localStorage.setItem("loginInfo",JSON.stringify(storageData))
        navigate("/user/confirm");
    }
    const handleNewUserConfirmPassword = () => {
        const storageData = { userName : userName };
        localStorage.setItem("loginInfo",JSON.stringify(storageData));
        navigate("/user/register/confirm");
    }

    const fetchNum = async (id) => {
        await fetch(`http://localhost:8000/accounts/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                Object.keys(data).length === 0 ? handleNewUserConfirmPassword() : handleToConfirmPage() ;
            })

    }
    const fetchEmail = async (e) => {
        return await fetch(`http://localhost:8000/accounts/?email=${e}`)
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                !data ? handleEmailError() : handleToConfirmPage();
            }).catch(e => {
                console.log(e);
            })
    }

    const charRegEx = /([A-Za-z])\w+/;
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegEx = /^(\09|0)?9[0-3]\d{8}$/;

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        userName === "" && alert("vallah el azim you are koor,write something");
        if (charRegEx.test(userName)) {
            if (emailRegEx.test(userName)) {
                await fetchEmail(userName);
            }
            else {
                setEmailNotExistError(true)
            }
        }
        if (phoneRegEx.test(userName)) {
            if (userName.startsWith("0")) {
                const validNumber = userName.substring(1);
                fetchNum(validNumber)
            }
            else {
                fetchNum(userName)
                // alert("Right number step-sister")
            }
        }
        // else{alert("hello how are you sister ridi twice")}
    }
    return (
        <div className='login-page-container'>
            <div className='login-box'>
                <div onClick={() => navigate("/")} className="login-logo" alt="دیجی کالا" >
                    <img alt="digikala.com" src='https://www.digikala.com/static/files/bc60cf05.svg' style={{ width: "151px", height: "43px" }} />
                </div>

                <h3 className='login-header-title'>ورود / ثبت نام</h3>
                <p className='discription-text login-input-title'>شماره موبایل یا پست الکترونیک خود را وارد کنید</p>

                <form onSubmit={onSubmitHandler}>
                    <input type="text" onChange={(e) => setUserName(e.target.value)}
                        className='login-form-input' />
                    <p className='discription-text error-text'>{validInput && "شماره موبایل یا ایمیل نادرست است"}</p>
                    <input type="submit" className='loginBtnCart-loginPage' value="ورود به دیجی‌کالا" />
                </form>

                <p className='discription-text login-discription'>با ورود و یا ثبت نام در دیجی‌کالا شما
                    شرایط و قوانین
                    استفاده از سرویس های سایت دیجی‌کالا و
                    قوانین حریم خصوصی
                    آن را می‌پذیرید.</p>

            </div>

        </div>
    )
}

export default Login
