import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from '../../store/slices/loginStatusSlice';
// import { passwordTokenHandler } from '../../store/slices/tokenSlice';
import { useNavigate } from 'react-router-dom';
import guid from '../../utils/guid';

import engToFaNum from '../../utils/engTofaNum'

import styles from './confirmStyles.module.css'

const NewUserPass = () => {

    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    // const [ fetchLocalData , setFetchLocalData ] = useState(null);
    const [ localDataUserName , setLocalDataUserName ] = useState("");

    const navigate = useNavigate();

    // const loginID = useSelector(state => state.userToken.userID);
    const dispatch = useDispatch();
    const postData = async() => {
        
        const data = {
            id:guid(),
            fName:"",
            lName:"",
            email: "",
            cart: [],
            wishlist: [],
            address: [],
            recentWatched: [],
            orders: {
                progress:[],
                delivered:[],
                returned:[],
                canceled:[]
            },
            birthDate: "",
            idNumber: "",
            moneyReturnID: "",
            password: password,
            phoneNumber: localDataUserName
        }
        await fetch('http://localhost:8000/accounts',{
            method: 'POST',
            body:JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        localStorage.setItem("token",JSON.stringify(data.id));
        localStorage.setItem("user",JSON.stringify(data))
    }

    useEffect(()=>{
        const getLocalData = localStorage.getItem("loginInfo");
        const objLocalData = JSON.parse(getLocalData);
        setLocalDataUserName(objLocalData.userName);
        // setFetchLocalData(objLocalData);
    },[])

    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (validPassword.test(password)) {
            if (confirmPassword === password) {
                // const modifiedLocalData = { ...fetchLocalData,password:password }
                // console.log(modifiedLocalData);
                // localStorage.setItem("loginInfo",JSON.stringify(modifiedLocalData))
                postData();
                dispatch(logIn());
                // change to user/welcome
                navigate("/");
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
                    حساب کاربری با شماره موبایل {localDataUserName.startsWith("0") ? engToFaNum(localDataUserName) :engToFaNum(0)+engToFaNum(localDataUserName)} وجود ندارد.<br/>
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
                        <li className={`${styles.discriptionText} ${styles.lists}`}>طول رمز عبور شما حداقل {engToFaNum(6)} کارکتر باشد.</li>
                        <li className={`${styles.discriptionText} ${styles.lists}`}><span style={{textDecoration:"underline"}}>ترجیحا</span> شامل یک کارکتر خاص باشد.</li>
                        
                    </div>
            </div>

        </div>
    )
}



export default NewUserPass;

// کد تایید را وارد نمایید
// حساب کاربری با شماره موبایل ۰۹۰۱۲۶۶۳۳۴۰ وجود ندارد.
// برای ساخت حساب جدید، کد تایید برای این شماره ارسال گردید.