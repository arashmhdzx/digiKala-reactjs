import React,{ useState ,useEffect } from 'react';

import { useSelector ,useDispatch } from 'react-redux';
import { logIn } from '../../store/slices/loginStatusSlice';
import { passwordTokenHandler } from '../../store/slices/tokenSlice';

import { useNavigate } from 'react-router-dom';
import styles from './confirmStyles.module.css'

const Confirm = () => {
    const [password, setPassword] = useState("");
    const [fecthedData,setFetchedData] = useState(null);
    
    const navigate = useNavigate();
    
    const loginID = useSelector(state => state.userToken.userID);
    const dispatch = useDispatch();

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(fecthedData.password === password){
            dispatch(passwordTokenHandler(password));
            dispatch(logIn());
            navigate("/");
        }
        else{
            alert("sister,reedi")
        }
    }

    useEffect(() => {
        fetch(`http://localhost:8000/accounts/${loginID}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setFetchedData(data);
            })
    
    }, [loginID]);
    
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