import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../store/slices/loginStatusSlice';
import { passwordTokenHandler } from '../../store/slices/tokenSlice';
import { useNavigate } from 'react-router-dom';

import engToFaNum from '../../utils/engTofaNum'

import styles from './confirmStyles.module.css'

const NewUserPass = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const loginID = useSelector(state => state.userToken.userID);
    const dispatch = useDispatch();

    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (validPassword.test(password)) {
            if (confirmPassword === password) {
                dispatch(passwordTokenHandler(password));
                dispatch(logIn());
                navigate("/welcome");
            }
            else {
                alert("sister,reedi,eshteb zadi");
            }
        }
        else {
            alert("enter valid pasword ya brother");
        }
    }

    // fecthedData && 

    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.loginBox}>
                <div onClick={() => navigate("/")} className="login-logo" alt="دیجی کالا" >
                    <img alt="digikala.com" src='https://www.digikala.com/static/files/bc60cf05.svg' style={{ width: "151px", height: "43px" }} />
                </div>

                <h5 className={styles.loginHeaderTitle}>
                    حساب کاربری با شماره موبایل {engToFaNum(loginID)} وجود ندارد.<br/>
                    برای ساخت حساب جدید، رمز عبور خود را وارد کنید.</h5>
                <p className={`${styles.discriptionText} ${styles.loginInpuTitle}`}>رمز عبور حساب کاربری خود را وارد کنید</p>

                <form onSubmit={onSubmitHandler}>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}
                        className={styles.loginFormInput} />
                    <p className={`${styles.discriptionText} ${styles.loginInpuTitle}`}>رمز عبور را تایید کنید</p>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}
                        className={styles.loginFormInput} />
                    <input type="submit" className={styles.loginBtnCartLoginPage} value="ادامه" />
                </form>
                <p  className={`${styles.discriptionText} ${styles.loginDiscription}`} style={{fontWeight:"bold"}}  >رمز عبور شما <span style={{textDecoration:"underline"}}>باید</span> شامل موارد زیر باشد:</p>
                    <div>
                        <li className={`${styles.discriptionText} ${styles.lists}`}>حداقل شامل یک کارکتر بزرگ باشد.</li>
                        <li className={`${styles.discriptionText} ${styles.lists}`}>حداقل شامل یک عدد باشد.</li>
                        <li className={`${styles.discriptionText} ${styles.lists}`}>حداقل شامل یک عدد باشد.</li>
                        <li className={`${styles.discriptionText} ${styles.lists}`}>طول رمز عبور شما حداقل {engToFaNum(6)} کارکتر باشد.</li>
                        
                    </div>
            </div>

        </div>
    )
}



export default NewUserPass;

// کد تایید را وارد نمایید
// حساب کاربری با شماره موبایل ۰۹۰۱۲۶۶۳۳۴۰ وجود ندارد.
// برای ساخت حساب جدید، کد تایید برای این شماره ارسال گردید.