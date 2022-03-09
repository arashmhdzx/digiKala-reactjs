/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from '../../store/slices/loginStatusSlice';
// import { passwordTokenHandler } from '../../store/slices/tokenSlice';

import { useNavigate } from 'react-router-dom';
import styles from './confirmStyles.module.css'

const Confirm = () => {
    const [password, setPassword] = useState("");
    const [localUserName, setLocalUserName] = useState("");
    const [localData, setLocalData] = useState(null);
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // const localProcess = () => {
    //     const getLocalLoginInfo = localStorage.getItem("loginInfo");
    //     console.log(getLocalLoginInfo);
    //     setLocalData(JSON.parse(getLocalLoginInfo));
    //     setLocalUserName(JSON.parse(getLocalLoginInfo).userName);
    // }

    const fetchData = async (id) => {
        await fetch(`http://localhost:8000/accounts/?phoneNumber=${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setUserData(data);
                // console.log("fet",data);
            })
    }
    // async function fetchingProcess(){
    //     try {
    //         localProcess();
    //         await(fetchData());
    //     } catch (error) {
    //         alert("run")
    //     }
    // }



    useEffect(() => {
        const getLocalLoginInfo = localStorage.getItem("loginInfo");
        // console.log(getLocalLoginInfo);
        fetchData(JSON.parse(getLocalLoginInfo).userName)
    }, [])




    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (userData[0]?.password === password) {
            localStorage.removeItem("loginInfo");
            // a function to update cart list
            // ...
            const notSignCart = JSON.parse(localStorage.getItem("cart"))
            if (notSignCart !== []) {
                var newCart = notSignCart.concat(userData[0].cart)
                newCart = Array.from(new Set(newCart.map(a => a.id)))
                    .map(id => {
                        return newCart.find(a => a.id === id)
                    })
                localStorage.setItem("cart",JSON.stringify(newCart))
            }
            localStorage.setItem("token", JSON.stringify(userData[0].id));
            localStorage.setItem("user", JSON.stringify(Object.fromEntries(Object.entries(userData[0]).filter(([key]) => (!key.includes('email')
                && !key.includes("password") && !key.includes("phoneNumber") && !key.includes("cart"))))));
            navigate("/");
            dispatch(logIn());
        }
        else {
            alert("sister,reedi")
        }
    }


    // fecthedData && 

    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.loginBox}>
                <div onClick={() => navigate("/")} className="login-logo" alt="دیجی کالا" >
                    <img alt="digikala.com" src='https://www.digikala.com/static/files/bc60cf05.svg' style={{ width: "151px", height: "43px" }} />
                </div>

                <h3 className={styles.loginHeaderTitle}>رمز عبور را وارد کنید</h3>
                <p className={`${styles.discriptionText} ,${styles.loginInpuTitle}`}>رمز عبور حساب کاربری خود را وارد کنید</p>

                <form onSubmit={onSubmitHandler}>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}
                        className={styles.loginFormInput} />
                    <input type="submit" className={styles.loginBtnCartLoginPage} value="ادامه" />
                </form>
                <a href='/' className={`${styles.discriptionText} ${styles.loginDiscription}`} style={{ color: "#006eff", marginTop: "40px" }} >بازیابی رمز عبور ˂ </a>
            </div>

        </div>
    )
}

export default Confirm;

    // return <div>رمز عبور را وارد کنید
    // رمز عبور حساب کاربری خود را وارد کنید</div>;