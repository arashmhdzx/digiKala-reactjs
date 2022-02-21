/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useState ,useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from '../../store/slices/loginStatusSlice';
// import { passwordTokenHandler } from '../../store/slices/tokenSlice';

import { useNavigate } from 'react-router-dom';
import styles from './confirmStyles.module.css'

const Confirm = () => {
    const [ password, setPassword ] = useState("");
    const [ localUserName , setLocalUserName ] = useState("");
    const [ localData , setLocalData ] = useState(null);
    const [ userData,setUserData ] = useState(null);
    
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    
    // const localProcess = () => {
    //     const getLocalLoginInfo = localStorage.getItem("loginInfo");
    //     console.log(getLocalLoginInfo);
    //     setLocalData(JSON.parse(getLocalLoginInfo));
    //     setLocalUserName(JSON.parse(getLocalLoginInfo).userName);
    // }
    
    const fetchData = async(id) =>{
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
    
    

    useEffect(()=>{
        const getLocalLoginInfo = localStorage.getItem("loginInfo");
        // console.log(getLocalLoginInfo);
        fetchData(JSON.parse(getLocalLoginInfo).userName)
    },[])


            
            
    const onSubmitHandler = async(e) =>{
        e.preventDefault();
        // await fetchingProcess();

        console.log("input pass",password);
        console.log("localData",localData);
        console.log("localusename",localUserName);
        console.log("userdata",userData);
        // console.log("userdata pass",userData[0].password);
        
        if(  userData[0]?.password === password){
            // const modifiedLocalUserInfo = { ...localData,password:password }
            // console.log(modifiedLocalUserInfo);
            // localStorage.setItem("loginInfo",JSON.stringify(modifiedLocalUserInfo));
            localStorage.removeItem("loginInfo");
            const token = { token:userData[0].id }
            localStorage.setItem("token",JSON.stringify(token));
            const data = { userData: userData[0] }
            localStorage.setItem("user",JSON.stringify(data));
            navigate("/");
            dispatch(logIn());
        }
        else{
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
                <a href='/' className={`${styles.discriptionText} ${styles.loginDiscription}`} style={{color:"#006eff",marginTop:"40px"}} >بازیابی رمز عبور ˂ </a>
            </div>

        </div>
    )
}

export default Confirm;

    // return <div>رمز عبور را وارد کنید
    // رمز عبور حساب کاربری خود را وارد کنید</div>;