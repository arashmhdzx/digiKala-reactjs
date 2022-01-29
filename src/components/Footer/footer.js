/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React,{ useState,useEffect } from 'react'


import InstagramBNW from "./icons/BNW/instagram.svg"
import TwitterBNW from "./icons/BNW/twitter.svg"
import LinkedinBNW from "./icons/BNW/linkedin.svg"
import AparatBNW from "./icons/BNW/aparat.svg"

import Instagram from "./icons/instagram.svg"
import Twitter from "./icons/twitter.svg"
import Linkedin from "./icons/linkedin.svg"
import Aparat from "./icons/aparat.svg"



import "./style.css"

const footer = ({ iconsData }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }; 

    const[email,setEmail] = useState("");

    const onSubmit = async(e) => {
            e.preventDefault();
            const emailData = { data : email }
            await fetch("http://localhost:8000/discountRegisterEmails",{
                method:"POST",
                headers:{ "Content-Type":"application/json" },
                body : JSON.stringify(emailData)
            })
            
    }

    return (
        <div className="footer-container">
            <div className="inner-footer-container">
                <div className="footerHeader-container flex-row">
                    <img src={"https://www.digikala.com/static/files/2a4774d7.svg"} width="113px" height="30px" alt="" loading="lazy" />
                    <div className="toTop-btn" onClick={scrollToTop}>
                        <span className="toTop-text">بازگشت به بالا</span>
                        <span>
                            
                        </span>
                    </div>
                </div>
                <div className="contact-info-container flex-row">
                    <div>تلفن پشتیبانی:</div>
                    <a href="/faq/phone" className="faq-phone">۶۱۹۳۰۰۰۰ - ۰۲۱</a>
                    <div className="vertical" style={{height:"15px", margin:"0px 17px"}}></div>
                    <div>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</div>
                </div>
                <div className="Digikala-features">
                    {
                        iconsData.map( item => (

                            <a href={item.link} className="footer-featuresIcon">
                                <img classname="featureIcon-img" src={item.svgLink} style={{width:"54px",height:"54px"}} alt={item.title} />
                                <div className="featureIcon-title">{item.title}</div>
                            </a>

                        ))
                    }
                </div>

                <div className="Line" style={{width:"98"}}></div>

                <div className="footer-faq-container">
                    <nav classname="footer--column-links">
                        <a href="https://" className="footer--faq-table--header">با دیجیکالا</a>
                        <li><a href="https://" className="footer--faq-table--list">اتاق اخبار دیجی کالا</a></li>
                        <li><a href="https://" className="footer--faq-table--list">فروش در دیجی کالا</a></li>
                        <li><a href="https://" className="footer--faq-table--list">فرصت های شغلی</a></li>
                        <li><a href="https://" className="footer--faq-table--list">تماس با دیجی کالا</a></li>
                        <li><a href="https://" className="footer--faq-table--list">درباره دیجی کالا</a></li>
                    </nav>
                    <nav className="footer--column-links">
                        <a href="https://" className="footer--faq-table--header">خدمات مشتریان</a>
                        <li><a href="https://" className="footer--faq-table--list">پاسخ به پرسش های متداول</a></li>
                        <li><a href="https://" className="footer--faq-table--list">رویه های بازگرداندن کالا</a></li>
                        <li><a href="https://" className="footer--faq-table--list">شرایط استفاده</a></li>
                        <li><a href="https://" className="footer--faq-table--list">حریم خصوصی</a></li>
                        <li><a href="https://" className="footer--faq-table--list">گزارش باگ</a></li>
                        
                    </nav>
                    <nav className="footer--column-links">
                    <a href="https://" className="footer--faq-table--header">راهنمای خرید از دیجی کالا</a>
                    <li><a href="https://" className="footer--faq-table--list">نحوه ثبت سفارش</a></li>
                    <li><a href="https://" className="footer--faq-table--list">رویه ارسال سفارش</a></li>
                    <li><a href="https://" className="footer--faq-table--list">شیوه های پرداخت</a></li>

                    </nav>
                    <nav className="digikala-social">
                        <a href="https://" className="footer--faq-table--header">با ما همراه باشید</a>
                        <div className="socialIco-container">
                            <a href="https://instagram.com/digikala" target="_blank" rel="noreferrer">
                                <img src={InstagramBNW} onMouseOver={e => e.currentTarget.src = Instagram }
                                onMouseLeave={e => e.currentTarget.src = InstagramBNW } />
                            </a>
                            <a href="https://twitter.com/digikalacom" target="_blank" rel="noreferrer">
                                <img src={TwitterBNW} onMouseOver={e => e.currentTarget.src = Twitter }
                                onMouseLeave={e => e.currentTarget.src = TwitterBNW } />
                            </a>
                            <a href="https://linkedin/in/company/digikala" target="_blank" rel="noreferrer">
                                <img src={LinkedinBNW} onMouseOver={e => e.currentTarget.src = Linkedin }
                                onMouseLeave={e => e.currentTarget.src = LinkedinBNW } />
                            </a>
                            <a href="https://aparat.com/digikala" target="_blank" rel="noreferrer">
                                <img src={AparatBNW} onMouseOver={e => e.currentTarget.src = Aparat }
                                onMouseLeave={e => e.currentTarget.src = AparatBNW } />
                            </a>
                        </div>
                        <a href="https://" className="footer--faq-table--header">از جدیدترین تخفیف‌ها باخبر شوید</a>

                        <div className="footer--email-section flex">
                            <form onSubmit={onSubmit}>
                                <input type="email"  onChange={(e) => setEmail(e.target.value)}
                                value={email} placeholder="آدرس ایمیل خود را وارد کنید" className="footer--email-box"/>
                                <input type="submit" style={{backgroundColor: email !== "" && "#ef394e",cursor:email !== "" && "pointer" }} className="footer--email-submitBtn" value="ثبت" />
                            </form>
                        </div>
                        
                    </nav>
                </div>
                <div className="app-linker-container">
                    <a href="/app/download" className="app-linker-right">
                        <div className="app-linker-icon"></div>
                        <div className="app-linker-DApp-title">دانلود اپلیکیشن</div>
                    </a>
                    <div className="asdsa">
                        <a href="/app/download" className="footer--market-icon">
                            <img src="https://www.digikala.com/static/files/6f0c9aeb.svg" loading="lazy" style={{width:"150px",height:"44px"}} className="footer--market-icon-style" />
                        </a>
                        <a href="/app/download" className="footer--market-icon">
                            <img src="https://www.digikala.com/static/files/b43d144f.svg" loading="lazy" style={{width:"150px",height:"44px"}} className="footer--market-icon-style" />
                        </a>
                        <a href="/app/download" className="footer--market-icon">
                            <img src="https://www.digikala.com/static/files/401848fb.png" loading="lazy" style={{width:"150px",height:"44px"}} />
                        </a>
                        <a href="/app/download" className="footer--market-icon">
                            <img src="https://www.digikala.com/static/files/c824b056.svg" loading="lazy" style={{width:"150px",height:"44px"}} className="footer--market-icon-style" />
                        </a>
                        <a href="/app/download" className="footer--market-icon-etc" >
                            ...
                        </a>
                    </div>

                </div>
                <div className="footer-digikala-discription">

                </div>

                <div className="NormalSingleLine"></div>  

                <div className="footer-copywrite-container">

                </div>
            </div>
        </div>
    )
}

export default footer
