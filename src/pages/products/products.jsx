import React, { useState } from 'react';
import styled from './style.module.css';
import Carousel from 'react-elastic-carousel'

import Navbar from '../../components/header/NavBar';
import RecommendHomeCart from '../../components/cart/recommendHomeCart/recommendHomeCart';
import Footer from '../../components/Footer/footer'

import minDatas from '../../data/minDatas.json'
import supportLinks from './link.json'

import { AddProduct } from '../../api/production';
import engToPer from '../../utils/engTofaNum';

import { ReactComponent as Plus } from '../../components/header/downerHeader/icons/plus.svg';
import { ReactComponent as LeftArrow } from './icons/leftArrow.svg';
import { ReactComponent as Info } from './icons/info.svg';
import { ReactComponent as Dk } from './icons/dk.svg';
import { ReactComponent as Guarantee } from './icons/guarantee.svg';
import { ReactComponent as Delivery } from './icons/deliveryTruck.svg';
import { ReactComponent as Available } from './icons/availbleProduct.svg'
import { ReactComponent as Point } from './icons/club-point.svg'
import { ReactComponent as Toman } from './icons/toman.svg'
import { ReactComponent as Add } from './icons/add.svg'
import { ReactComponent as Remove } from './icons/remove.svg'
import { ReactComponent as Delete } from './icons/delete.svg'
import { ReactComponent as Done } from './icons/done.svg'



const Products = () => {

    const colorSelectHandler = (id) => {
        console.log(id);
        setSelectedBox(id);
    }



    const slash = <span className={styled.slash}>/</span>

    const line = <div className={styled.line} />
    const brand = "شیائومی";
    const price = "985,000"
    const brand_category = "ساعت هوشمند شیائومی";

    const ThreeDotsIcon = <svg width="24px" height="24px" fill="rgb(66,71,80)"><svg id="moreHoriz" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" clip-rule="evenodd"></path></svg></svg>
    const thumbsUp = <svg width="16px" height="16px" fill='#4caf50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 8l3.15-4.2a4.5 4.5 0 013.6-1.8 2.483 2.483 0 012.449 2.89L16.18 8h2.424a3 3 0 012.951 3.537l-.974 5.357A5 5 0 0115.661 21h-6.55c-.148 0-.294-.033-.428-.096l-.824-.39A1 1 0 017 21H3a1 1 0 01-1-1V9a1 1 0 011-1h4.5zm.5 2v8.367L9.336 19h6.326a3 3 0 002.951-2.463l.974-5.358A1 1 0 0018.603 10H15a1 1 0 01-.986-1.164l.712-4.274A.482.482 0 0014.25 4a2.5 2.5 0 00-2 1L8.8 9.6a1 1 0 01-.8.4zm-2 0H4v9h2v-9z" clip-rule="evenodd"></path></svg>
    const dot = <svg width="16px" height="16px" fill="#e0e0e2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="2"></circle></svg>
    const plusDot = <svg width="16px" height="16px" fill="#a6358a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="2"></circle></svg>
    const colorData = [{ "212121": "مشکی" }, { "fff": "سفید" }, { "dedede": "نقره ای" }, { "40aaff": "آبی روشن" }]
    const attributes = [{ "رزولوشن": "صفحه نمایش" }, { "نوع کاربری": "روزمره، ورزشی" }, { "فرم صفحه": "بیضی" }, { "جنس بند": "سیلیکون" }]

    const [selectedBox, setSelectedBox] = useState(colorData[0])
    const [quantity, setQuantity] = useState(0)
    const productData = { id: "dk-123321", quantity: quantity, color: selectedBox, price: price }
    const moreImage = [
        {
            image: "https://dkstatics-public.digikala.com/digikala-products/fff3cfce14bdfdbf23eb263fb184c88620c1ec37_1619901421.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
            image: "https://dkstatics-public.digikala.com/digikala-products/fff3cfce14bdfdbf23eb263fb184c88620c1ec37_1619901421.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
            image: "https://dkstatics-public.digikala.com/digikala-products/fff3cfce14bdfdbf23eb263fb184c88620c1ec37_1619901421.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
            image: "https://dkstatics-public.digikala.com/digikala-products/fff3cfce14bdfdbf23eb263fb184c88620c1ec37_1619901421.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
            image: "https://dkstatics-public.digikala.com/digikala-products/fff3cfce14bdfdbf23eb263fb184c88620c1ec37_1619901421.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
            image: "https://dkstatics-public.digikala.com/digikala-products/fff3cfce14bdfdbf23eb263fb184c88620c1ec37_1619901421.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
            image: "https://dkstatics-public.digikala.com/digikala-products/fff3cfce14bdfdbf23eb263fb184c88620c1ec37_1619901421.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        }
    ]



    return <>
        <Navbar />
        <div className={styled.container}>
            <div className={styled.sp_20}>
                <div className={styled.productContent}>
                    <p className={styled.pathText}>دیجی‌کالا{slash}کالای دیجیتال{slash}ساعت و مچ بند هوشمند{slash}مچ بند هوشمند</p>
                    <div className={styled.d_flex}>
                        <div className={styled.productImageConrainer}>
                            <img style={{ width: "90%" }} src="https://dkstatics-public.digikala.com/digikala-products/3ae838864ed3a2ec364f28e70bf2da22def4f1fd_1619901420.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt="مچ بند هوشمند شیائومی مدل Mi Band 6 Global Version" />
                            <div className={styled.productMoreImage}>
                                {moreImage.map((item, index) => (index < 6 &&
                                    <div className={`${styled.moreImageBoxContainer} ${index === 5 && styled.flex_ai}`}>
                                        <div key={index} className={`${styled.moreImage} ${index === 5 && styled.moreImageBlur}`}>
                                            <img width="72px" height="72px" src={item.image} alt="مچ بند هوشمند شیائومی مدل Mi Band 6 Global Version" />
                                        </div>
                                        {index === 5 &&
                                            <div className={styled.flexabs}>
                                                {ThreeDotsIcon}
                                            </div>
                                        }
                                    </div>
                                ))
                                }
                            </div>
                            {/* <div className={styled.productImage}></div> */}
                        </div>
                        <div className={styled.flex_g}>

                            <div>
                                {brand &&
                                    <div>
                                        <a href="/brand" className={styled.brand} >{brand}</a>
                                        {slash}
                                        <a href="/brand/" className={styled.brand} >{brand_category}</a>
                                    </div>
                                }
                                <h3>مچ بند هوشمند شیائومی مدل Mi Band 6 Global Version</h3>
                            </div>
                            <div className={styled.infoSection} style={{ paddingTop: "16px" }}>
                                <div className={styled.flex_col} style={{ width: "100%", padding: "0 10px" }}>
                                    <div className={styled.flex_col} >
                                        <div className={styled.line} />
                                        <div className={`${styled.flex_row} ${styled.ai_center} `} style={{ marginTop: "8px" }}>
                                            <div className={`${styled.flex_row} ${styled.ai_center}`}>
                                                <img src="https://www.digikala.com/statics/img/png/star-yellow.png" alt="" />
                                                <div className={styled.reviewAvg}>{engToPer(4.4)}</div>
                                                <div className={styled.reviewsQuantity}>{engToPer("(85)")}</div>

                                            </div>
                                            {dot}
                                            <div className={styled.reviewAvg} style={{ color: "#19bfd3" }} >
                                                {engToPer(8500)} دیدگاه
                                            </div>
                                            {dot}
                                            <div className={styled.reviewAvg} style={{ color: "#19bfd3" }} >
                                                {engToPer(69)} پرسش
                                            </div>

                                        </div>
                                        <div className={`${styled.flex_row} ${styled.ai_center} ${styled.reviewAvg}`} style={{ marginTop: "16px", padding: "0" }}>
                                            {thumbsUp}
                                            <p className={`${styled.flex_row} ${styled.ai_center}`} >
                                                {engToPer("85%")}
                                                <p className={`${styled.reviewsQuantity} ${styled.p_r8}`}>{engToPer('(999)')}</p>
                                                نفر از خریداران، این کالا را پیشنهاد کرده اند
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styled.flex_col} ${styled.p_c12}`}>
                                        <h3 className={` ${styled.p_c12}`} style={{ paddingTop: "16px" }}>رنگ: {Object.values(selectedBox)}</h3>
                                        <div className={`${styled.flex_row} ${styled.p_c8} ${styled.flex_wrap} color-container`} style={{ overflowX: "auto", userSelect: "none", cursor: "pointer" }}>
                                            {

                                                colorData.map((e) => (

                                                    <div key={Object.keys(e)} onClick={() => colorSelectHandler(e)} className={` ${styled.colorWrapper}
                                                    ${Object.keys(e)[0] == Object.keys(selectedBox)[0] ? styled.actived : ''} color-box`} >
                                                        <div className={`${styled.color}`} style={{ backgroundColor: "#" + Object.keys(e) }} >
                                                            {
                                                                Object.keys(e)[0] == Object.keys(selectedBox)[0] &&
                                                                <div className={`${styled.d_flex}`} style={{ justifyContent: "center", margin: "2px 0 0" }}>
                                                                    <Done fill={Object.keys(e)[0] === "fff" ? "#000" : "#fff"} />
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={`${styled.flex_col} ${styled.p_c12} ${styled.border_buttom}`}>
                                        <h3 className={` ${styled.p_c12}`} style={{ paddingTop: "16px" }}>ویژگی ها</h3>
                                        <div className={`${styled.flex_col}`} style={{ userSelect: "none" }}>
                                            {
                                                attributes.map((e) => (
                                                    <li className={` ${styled.ul} ${styled.ai_center} ${styled.p_c4}`} >
                                                        <span className={styled.reviewsQuantity} style={{ fontSize: "1rem" }}>{Object.keys(e)[0] + " : "}</span><span style={{ color: "#424750" }}>{Object.values(e)[0]}</span>
                                                    </li>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={`${styled.flex_row} ${styled.ai_center} ${styled.p_c12}`}>
                                        <div className={`${styled.d_flex} ${styled.p_r8} ${styled.ai_center} `}><Info /></div>
                                        <p className={`${styled.reviewsQuantity} ${styled.p_c12}`} style={{ fontSize: ".9rem", color: "#000" }} >
                                            امکان برگشت کالا در گروه مچ بند هوشمند با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد.
                                        </p>
                                    </div>
                                    <div className={`${styled.p_c12} ${styled.p_r12} ${styled.border}`}>
                                        <div className={`${styled.flex_row} ${styled.p_c12}`} style={{ justifyContent: "space-between" }}>
                                            <div className={`${styled.flex_row} ${styled.ai_center}`}>
                                                <div className={`${styled.flex_row} ${styled.p_r8} ${styled.ai_center}`}><Plus /></div>
                                                <p style={{ color: "#424750", fontSize: ".9rem", fontWeight: "500" }} >ویژه اعضای دیجی‌پلاس</p>
                                            </div>
                                            <div className={`${styled.flex_row} ${styled.ai_center}`}>
                                                <LeftArrow />
                                            </div>
                                        </div>
                                        <div className={`${styled.flex_col} ${styled.p_c12}`}>
                                            <div className={`${styled.flex_row} ${styled.ai_center} ${styled.p_c4}`}>
                                                <div className={`${styled.d_flex} ${styled.p_r8} ${styled.ai_center} `}>
                                                    {plusDot}
                                                </div>
                                                <div className={styled.reviewsQuantity} style={{ fontWeight: "500" }}>ارسال رایگان</div>
                                            </div>
                                            <div className={`${styled.flex_row} ${styled.ai_center} ${styled.p_c4}`}>
                                                <div className={`${styled.d_flex}  ${styled.p_r8} ${styled.ai_center} `}>
                                                    {plusDot}
                                                </div>
                                                <div className={styled.reviewsQuantity} style={{ fontWeight: "500" }}>امکان ارسال فوری (شهر تهران)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styled.buyBox}`}>
                                    <div className={`${styled.border} ${styled.buyBg}`}>
                                        <div className={`${styled.flex_row} ${styled.ai_center}`} style={{ padding: "12px 20px", justifyContent: "space-between" }}>
                                            <h4 style={{ fontWeight: "500" }}>فروشنده</h4>
                                            <p className={styled.reviewAvg} style={{ color: "#19bfd3", fontSize: ".8rem", fontWeight: "600" }}>{engToPer(14)} فروشنده دیگر</p>
                                        </div>
                                        <div className={`${styled.p_r16} ${styled.flex_col}`}>
                                            <div className={`${styled.p_c12}  ${styled.flex_col}`}>
                                                <div className={`${styled.d_flex} ${styled.ai_center}`} style={{ lineHeight: "2.15" }}>
                                                    <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Dk /></div>
                                                    <div style={{ color: "#424750" }}>دیجیکالا</div>
                                                </div>
                                                <div className={`${styled.d_flex} ${styled.ai_center}  ${styled.reviewAvg}`} style={{ paddingRight: "40px" }} >
                                                    <p style={{ marginLeft: "5px", color: "#81858b" }}>عملکرد</p>
                                                    <span style={{ color: "#00a049" }} >{"حق"}</span>
                                                </div>
                                            </div>
                                            {line}
                                            <div className={`${styled.d_flex} ${styled.ai_center} ${styled.p_c12} `} style={{ lineHeight: "2.15" }}>
                                                <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Guarantee /></div>
                                                <div className={` ${styled.p_c8}`} style={{ color: "#424750", fontSize: ".8rem", fontWeight: "bold" }}>گارانتی ۱۸ ماهه رایانه همراه</div>
                                            </div>
                                            {line}
                                            <div className={`${styled.p_c12}  ${styled.flex_col}`}>
                                                <div className={`${styled.d_flex}`} style={{ lineHeight: "2.15", justifyContent: "space-between" }}>
                                                    <div className={`${styled.d_flex} ${styled.ai_center}`}>
                                                        <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Available /></div>
                                                        <div style={{ color: "#424750", fontWeight: "bold", fontSize: ".9rem" }}>موجود در انبار دیجی‌کالا</div>
                                                    </div>
                                                    <LeftArrow />
                                                </div>
                                                <div className={`${styled.d_flex} ${styled.ai_center} ${styled.reviewAvg}`} style={{ paddingRight: "40px" }} >
                                                    <Delivery />
                                                    <p className={styled.reviewAvg} style={{ fontSize: "0.9rem", color: "#81858b" }}>ارسال دیجیکالا</p>
                                                </div>
                                            </div>
                                            {line}
                                            <div className={`${styled.d_flex} ${styled.ai_center} ${styled.p_c12} `} style={{ lineHeight: "2.15" }}>
                                                <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Point /></div>
                                                <div className={` ${styled.p_c8}`} style={{ color: "#424750", fontSize: ".8rem", fontWeight: "bold" }}>۹۵ امتیاز دیجی‌کلاب</div>
                                                <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`} ><Info /></div>
                                            </div>
                                            {line}
                                            <div className={`${styled.p_c12}  ${styled.flex_col}`} >
                                                <div className={`${styled.d_flex} ${styled.ai_center} ${styled.p_c12} `} style={{ justifyContent: "flex-end" }}>
                                                    <h3 className={styled.p_r8}>{engToPer(price)}</h3>
                                                    <Toman />
                                                </div>
                                                {
                                                    quantity == 0 ?
                                                        <div onClick={() => setQuantity(1)} className={`${styled.d_flex} ${styled.ai_center} ${styled.addButton} `}>
                                                            <p className={styled.addButtonText}>افزودن به سبد</p>
                                                        </div> :
                                                        <div className={`${styled.flex_row}`} style={{ padding: "4px" }} >
                                                            <div className={`${styled.border_box} ${styled.boxSize} ${styled.boxShadow} ${styled.p_r8} ${styled.flex_row} ${styled.ai_center}`}
                                                                style={{ borderRadius: "8px", justifyContent: "space-between", userSelect: "none" }}
                                                            >
                                                                <div onClick={() => setQuantity(prev => prev + 1)} className={`${styled.d_flex} ${styled.ai_center}`}>
                                                                    <Add />
                                                                </div>
                                                                <span className={`${styled.d_flex} ${styled.ai_center}`}>{engToPer(quantity)}</span>
                                                                <div className={`${styled.flex_row} ${styled.ai_center}`}>
                                                                    {
                                                                        quantity > 1 ?
                                                                            <div onClick={() => setQuantity(prev => prev - 1)} className={`${styled.d_flex} ${styled.ai_center}`}>
                                                                                <Remove />
                                                                            </div> :
                                                                            <div onClick={() => setQuantity(0)} className={`${styled.d_flex} ${styled.ai_center}`}>
                                                                                <Delete />
                                                                            </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className={`${styled.flex_col} ${styled.p_r16} ${styled.reviewAvg}`}>
                                                                <p>در سبد شما</p>
                                                                <div style={{ fontSize: ".8rem" }}>
                                                                    <span>مشاهده </span>
                                                                    <span style={{ color: "#19bfd3" }}>سبد خرید</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={` ${styled.flex_col}`}>
                                        <div className={`${styled.reviewsQuantity} ${styled.p_c12}  ${styled.d_flex}`} style={{ fontSize: ".8rem", justifyContent: "flex-end" }}>
                                            <div>قیمت بهتری سراغ دارید؟</div>
                                            <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Info /></div>
                                        </div>
                                        <div className={`${styled.p_c12}  ${styled.flex_col} ${styled.border}`} style={{ margin: "8px 0" }}>
                                            <div className={`${styled.d_flex} ${styled.ai_center}`} style={{ lineHeight: "2.15" }}>
                                                <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Info fill='#f9a825' /></div>
                                                <h5 style={{ color: "#424750" }}>این کالا را ارزانتر بخرید</h5>
                                            </div>
                                            <div className={`${styled.d_flex} ${styled.ai_center}  ${styled.reviewAvg}`} style={{ paddingRight: "40px" }} >
                                                <p style={{ fontSize: ".8rem", color: "#81858b" }}>از ۹۴۰,۰۰۰ تومان توسط دیگر فروشندگان</p>
                                            </div>
                                        </div>
                                        <div className={`${styled.p_c12} ${styled.border} ${styled.flex_col}`} >
                                            <div className={`${styled.d_flex}`} style={{ lineHeight: "2.15", justifyContent: "space-between" }}>
                                                <div className={`${styled.d_flex} ${styled.ai_center}`}>
                                                    <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Info /></div>
                                                    <div style={{ color: "#424750", fontWeight: "300", fontSize: ".88rem" }}>فرآیند قیمت‌گذاری و نظارت بر قیمت</div>
                                                </div>
                                                <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}>
                                                    <LeftArrow />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styled.d_flex} ${styled.border_top} ${styled.border_bottom4}`} style={{ margin: "40px 0" }}>
                    <div className={`${styled.flex_row} `} style={{ justifyContent: "space-evenly", padding: "36px 0", width: "100%" }}>
                        {
                            supportLinks.map((e, index) => (
                                <a className={`${styled.flex_row} ${styled.ai_center}`} href={e.link} key={index}   >
                                    <img src={e.img} alt={e.title} />
                                    <p style={{ color: "#424750", fontWeight: "300", fontSize: ".88rem" }}>{e.title}</p>
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className={`${styled.border} ${styled.border_bottom4} ${styled.flex_col}`} style={{ marginBottom: "20px" }}>
                    <div className={styled.d_flex} style={{ padding: "12px 18px", width: "fitContent" }}>
                        <h3 className={styled.p_c8} style={{ borderBottom: "3px solid #ef4056" }} >کالاهای مشابه</h3>
                    </div>
                    <div>
                        <div className="RH-Slider">

                            <Carousel isRTL={true} itemsToShow={5} itemsToScroll={4} itemPadding={[0, 5, 0, 5]} verticalMode={false}>
                                {minDatas.map(data => (
                                    <RecommendHomeCart isFullWidth={false} link={data.link} imageLink={data.imageLink} newPrize={data.newPrize}
                                        oldPrize={data.oldPrize} percent={data.percent} isOffer={data.isOffer} discription={data.discription} />
                                ))}
                            </Carousel>

                        </div>
                    </div>
                </div>
                <div className={styled.flex_col}>
                    <div className={`${styled.d_flex} ${styled.p_r8} ${styled.border_bottom}`} style={{ position: "sticky", top: "82px", zIndex: "1", backgroundColor: "#fff" }}>
                        <div className={`${styled.flex_row} ${styled.p_c12}`}>
                            <div className={styled.p_r8}>معرفی</div>
                            <div className={styled.p_r8}>بررسی تخصصی</div>
                            <div className={styled.p_r8}>مشخصات</div>
                            <div className={styled.p_r8}>دیدگاه‌ها</div>
                        </div>
                    </div>
                    <div className={styled.flex_row}>
                        <div className={styled.flex_col}>
                            <div className={`${styled.border_bottom4} ${styled.flex_col}`} style={{ padding: "24px 0" }}>
                                <div className={styled.p_c8} style={{ width: "fit-content" }}>
                                    <h4 className={styled.p_c8} style={{ fontWeight: "500", borderBottom: "3px solid rgb(239, 64, 86)" }}>معرفی</h4>
                                </div>
                                <p className={styled.discriptionText} >
                                    مچ بند می بند 6، همه انتظارات ما را از نسل جدید می بندها را برآورده کرد. همانطور که اطلاع دارید، می بندهای شیائومی به قیمت مناسب و ارائه امکانات درخور توجه مشهور هستند و لمس مستقیم تکنولوژی را برای مخاطبان خود میسر کرده‌اند. البته انقلابی که شیائومی در می بند 6 به راه انداخت، جلوه ای دست و دلبازانه از تکنولوژی گجت های پوشیدنی بود که می بند 5 را تکمیل کرده و پشت سر گذاشت. افزایش سایز نمایشگر با نرخ 50 درصد، برخورداری از سنسور اکسیژن خون، پشتیبانی از 30 فعالیت ورزشی و پشتیبانی از دستیار صوتی الکسا موثرترین گام‌های شیائومی در می بند 6 نسبت به نسل قبل محسوب می‌شود.
                                </p>
                            </div>
                            <div className={`${styled.border_bottom4} ${styled.flex_col}`} style={{ padding: "24px 0" }}>
                                <div className={styled.p_c8} style={{ width: "fit-content" }}>
                                    <h4 className={styled.p_c8} style={{ fontWeight: "500", borderBottom: "3px solid rgb(239, 64, 86)" }}>بررسی تخصصی</h4>
                                </div>
                                <div className={styled.flex_row}>
                                    <div className={styled.flex_col} >
                                        <h4 className={styled.p_c12} style={{ fontWeight: "500" }}>برترین دستبند هوشمند جهان</h4>
                                        <p className={styled.discriptionText} style={{ lineHeight: "2rem" }}> بدون شک در عرصه دست‌بند‌های هوشمند، شیائومی توانست عملکرد بسیار عالی را به‌نمایش بگذارد. تجلی عملکرد شیائومی با معرفی دستبند هوشمند Mi Band 5 بود که به نسبت نسل قبلی خودش به صفحه‌نمایش بزرگتری مجهز شده بود. این دستبند هوشمند توانست با قابلیت‌های بسیار جذاب و البته قیمت مقرون به‌صرفه‌ای که داشت، لقب پرفروش‌ترین دستبند هوشمند جهان را به خودش اختصاص داد. اما نوبت به نسل جدید رسید و شاهد رونمایی شیائومی Mi Band 6 بودیم که به نسبت Mi Band 5 به مشخصات فنی قدرتمند‌تر و قابلیت‌های جذاب‌تری مجهز شده است. در نگاه اولیه طراحی در نظر گرفته شده برای این دستبند هوشمند تفاوتی با نسل قبلی ندارد. در قسمت پشتی اما سنسور‌های جدیدی به نسبت نسل قبلی برای این دستبند هوشمند در نظر گرفته شده که در ادامه به آن‌ها خواهیم پرداخت. درون جعبه این محصول هم دستبند هوشمند، دستبند و شارژر مغناطیسی قرار گرفته است. در قسمت‌های کناری صفحه‌نمایش هم خمیدگی‌های بسیار جذابی را شاهد هستیم که سبب شده تا با صفحه‌نمایش یکدست‌تر و زیبا‌تری رو‌به‌رو باشیم. همانطور که اشاره داشتیم، Mi Band 6 به صفحه‌نمایش با ابعاد بزرگتری به نسبت Mi Band 5 مجهز شده است و اما نکته جالب توجه وزن تقریبا مشابه 12.8 گرم با Mi Band 5 (وزن 12 گرم) است.</p>
                                    </div>
                                    <div style={{ marginRight: "16px" }}>
                                        <img src="https://dkstatics-public.digikala.com/digikala-reviews/c33340d760f558d6b52e8a5437976664fb693840_1635662780.jpg?x-oss-process=image/quality,q_70" alt="مچ بند شیاومی mi 6" />
                                    </div>
                                </div>
                            </div>
                            <div className={`${styled.border_bottom4} ${styled.flex_col}`} style={{ padding: "24px 0" }}>
                                <div className={styled.p_c8} style={{ width: "fit-content" }}>
                                    <h4 className={styled.p_c8} style={{ fontWeight: "500", borderBottom: "3px solid rgb(239, 64, 86)" }}>مشخصات</h4>
                                </div>
                                <div className={styled.flex_row}>
                                    <div className={`${styled.d_flex}`} style={{ width: "256px", marginLeft: "48px" }}>
                                        <h4 className={styled.p_c12} style={{ fontWeight: "500" }}>مشخصات</h4>
                                    </div>
                                    <div className={`${styled.flex_col} `} style={{ width: "100%" }}>
                                        <div className={`${styled.flex_col} attr`} style={{ width: "100%" }}>
                                            <div className={`${styled.flex_row} `}>
                                                <p className={`${styled.reviewsQuantity} ${styled.p_c12} ${styled.p_r8}`} style={{ width: "200px", marginLeft: "16px", fontSize: "1rem" }}>{"نوع باتری" + " : "}</p>
                                                <p className={`${styled.discriptionText} ${styled.p_c12} ${styled.border_bottom}`} style={{ width: "100%" }}>لیتیوم پلیمری</p>
                                            </div>
                                        </div>
                                        <div className={`${styled.flex_col} attr`} style={{ width: "100%" }}>
                                            <div className={`${styled.flex_row} `}>
                                                <p className={`${styled.reviewsQuantity} ${styled.p_c12} ${styled.p_r8}`} style={{ width: "200px", marginLeft: "16px", fontSize: "1rem" }}>{"تراکم پیکسلی صفحه نمایش" + " : "}</p>
                                                <p className={`${styled.discriptionText} ${styled.p_c12} ${styled.border_bottom}`} style={{ width: "100%" }}>۳۲۶ پیکسل بر اینچ</p>
                                            </div>
                                        </div>
                                        <div className={`${styled.flex_col} attr`} style={{ width: "100%" }}>
                                            <div className={`${styled.flex_row} `}>
                                                <p className={`${styled.reviewsQuantity} ${styled.p_c12} ${styled.p_r8}`} style={{ width: "200px", marginLeft: "16px", fontSize: "1rem" }}>{"رزولوشن صفحه نمایش" + " : "}</p>
                                                <p className={`${styled.discriptionText} ${styled.p_c12} ${styled.border_bottom}`} style={{ width: "100%" }}>۴۸۶x۱۵۲</p>
                                            </div>
                                        </div>
                                        <div className={`${styled.flex_col} attr`} style={{ width: "100%" }}>
                                            <div className={`${styled.flex_row} `}>
                                                <p className={`${styled.reviewsQuantity} ${styled.p_c12} ${styled.p_r8}`} style={{ width: "200px", marginLeft: "16px", fontSize: "1rem" }}>{"نوع صفحه نمایش" + " : "}</p>
                                                <p className={`${styled.discriptionText} ${styled.p_c12} ${styled.border_bottom}`} style={{ width: "100%" }}>AMOLED</p>
                                            </div>
                                        </div>
                                        <div className={`${styled.flex_col} attr`} style={{ width: "100%" }}>
                                            <div className={`${styled.flex_row} `}>
                                                <p className={`${styled.reviewsQuantity} ${styled.p_c12} ${styled.p_r8}`} style={{ width: "200px", marginLeft: "16px", fontSize: "1rem" }}>{"اتصالات" + " : "}</p>
                                                <p className={`${styled.discriptionText} ${styled.p_c12}`} style={{ width: "100%" }}>Bluetooth</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styled.border_bottom4} ${styled.flex_col}`} style={{ padding: "24px 0" }}>
                                <div className={styled.p_c8} style={{ width: "fit-content" }}>
                                    <h4 className={styled.p_c8} style={{ fontWeight: "500", borderBottom: "3px solid rgb(239, 64, 86)" }}>دیدگاه‌ها</h4>
                                </div>
                                <p className={styled.discriptonText}>

                                </p>
                            </div>


                        </div>
                        <div style={{ minWidth: "300px", marginRight: "40px" }}>
                            <div className={`${styled.p_c12}`} style={{ position: "sticky", top: "132px", maxWidth: "336px" }}>
                                <div className={`${styled.border} ${styled.stickyBox_bg} ${styled.flex_col}`} style={{ padding: "16px" }}>
                                    <div className={styled.flex_row}>
                                        <img width="80px" height="80px" src="https://dkstatics-public.digikala.com/digikala-products/3ae838864ed3a2ec364f28e70bf2da22def4f1fd_1619901420.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt="مچ بند هوشمند شیائومی مدل Mi Band 6 Global Version" />
                                        <div className={styled.flex_col} style={{ marginRight: "20px" }}>
                                            <p className={styled.discriptionText} style={{ fontSize: ".8rem" }}>مچ بند هوشمند شیائومی مدل Mi Band 6 Global Version</p>
                                            <div className={`${styled.flex_row} ${styled.ai_center}`} >
                                                <div className={styled.selectedColor} style={{ backgroundColor: "#" + Object.keys(selectedBox) }}></div>
                                                <p className={`${styled.p_r8} ${styled.discriptionText}`}>{Object.values(selectedBox)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {line}
                                    <div className={`${styled.flex_col} ${styled.p_c12}`}>
                                        <div className={`${styled.d_flex} ${styled.ai_center}`} style={{ marginBottom: "4px" }}>
                                            <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Dk width="18px" height="18px" /></div>
                                            <div className={styled.reviewAvg} style={{ fontSize: "0.9rem", color: "#424750" }}>دیجیکالا</div>
                                        </div>
                                        <div className={`${styled.d_flex} ${styled.ai_center}`} style={{ marginBottom: "4px" }}>
                                            <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Guarantee width="18px" height="18px" /></div>
                                            <div className={styled.reviewAvg} style={{ fontSize: "0.9rem", color: "#424750" }}>گارانتی ۱۸ ماهه رایانه همراه</div>
                                        </div>
                                        <div className={`${styled.d_flex} ${styled.ai_center}`} style={{ marginBottom: "4px" }}>
                                            <div className={` ${styled.p_r8} ${styled.d_flex} ${styled.ai_center}`}><Available width="18px" height="18px" /></div>
                                            <div className={styled.reviewAvg} style={{ fontSize: "0.9rem", color: "#424750" }}>موجود در انبار دیجی‌کالا</div>
                                        </div>
                                    </div>
                                    {line}
                                    <div>
                                        <div className={`${styled.p_c12}  ${styled.flex_col}`} >
                                            <div className={`${styled.d_flex} ${styled.ai_center} ${styled.p_c12} `} style={{ justifyContent: "flex-end" }}>
                                                <h3 className={styled.p_r8}>{engToPer("985,000")}</h3>
                                                <Toman />
                                            </div>
                                            {
                                                quantity == 0 ?
                                                    <div onClick={() => setQuantity(1)} className={`${styled.d_flex} ${styled.ai_center} ${styled.addButton} `}>
                                                        <p className={styled.addButtonText}>افزودن به سبد</p>
                                                    </div> :
                                                    <div className={`${styled.flex_row}`} style={{ padding: "4px" }} >
                                                        <div className={`${styled.border_box} ${styled.boxSize} ${styled.boxShadow} ${styled.p_r8} ${styled.flex_row} ${styled.ai_center}`}
                                                            style={{ borderRadius: "8px", justifyContent: "space-between", userSelect: "none" }}
                                                        >
                                                            <div onClick={() => setQuantity(prev => prev + 1)} className={`${styled.d_flex} ${styled.ai_center}`}>
                                                                <Add />
                                                            </div>
                                                            <span className={`${styled.d_flex} ${styled.ai_center}`}>{engToPer(quantity)}</span>
                                                            <div className={`${styled.flex_row} ${styled.ai_center}`}>
                                                                {
                                                                    quantity > 1 ?
                                                                        <div onClick={() => setQuantity(prev => prev - 1)} className={`${styled.d_flex} ${styled.ai_center}`}>
                                                                            <Remove />
                                                                        </div> :
                                                                        <div onClick={() => setQuantity(0)} className={`${styled.d_flex} ${styled.ai_center}`}>
                                                                            <Delete />
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className={`${styled.flex_col} ${styled.p_r16} ${styled.reviewAvg}`}>
                                                            <p>در سبد شما</p>
                                                            <div style={{ fontSize: ".8rem" }}>
                                                                <span>مشاهده </span>
                                                                <span style={{ color: "#19bfd3" }}>سبد خرید</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>;
};

export default Products;