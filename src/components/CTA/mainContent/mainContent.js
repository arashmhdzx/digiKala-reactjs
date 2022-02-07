import React from 'react'
//import ImageGallery from 'react-image-gallery'
//import SimpleImageSlider from 'react-simple-image-slider'
import Carousel from 'react-elastic-carousel'
import TopImg from "./images/sideImages/top.gif"
import DownImg from "./images/sideImages/bottom.gif"
import './style.css'


const mainContent = () => {

    const images =[
        {
            url:"https://dkstatics-public.digikala.com/digikala-adservice-banners/8d8584756fd92d2dcf939b358623ffea38f53ef7_1629709883.jpg?x-oss-process=image/quality,q_80",
            originalAlt:"جت",
            brand:"/brand"
        }
        ,{
            url:"https://dkstatics-public.digikala.com/digikala-adservice-banners/3292dc43aa6df1143292145c26dbf59282d21914_1622033545.jpg?x-oss-process=image/quality,q_80",
            originalAlt:"گردونه شانس",
            brand:"/nadi"
        }
        ,{        
            url:"https://dkstatics-public.digikala.com/digikala-adservice-banners/bf10b17c70441df38b3eadb46e2cc944324d9b39_1629474540.jpg?x-oss-process=image/quality,q_80",
            originalAlt:"پزشکی در خانه",
            brand:"/nadi"
        }
        ,{        
            url:"https://dkstatics-public.digikala.com/digikala-adservice-banners/c05cc6d3fce0d1a349ccb882108ce18edcd1b445_1628615499.jpg?x-oss-process=image/quality,q_80",
            originalAlt:"دو برابر راحیه بیشتر",
            brand:"/nadi"
        }
        ,{
            url:"https://dkstatics-public.digikala.com/digikala-adservice-banners/d49faebcc970d38c328a1d078564004b79810205_1629448972.jpg?x-oss-process=image/quality,q_80",
            originalAlt:"حراج فصل تابستان",
            brand:"/nadi"
        }
        ,{        
            url:"https://dkstatics-public.digikala.com/digikala-adservice-banners/a9ecf559e476dbe2bcd140df2043c40cfeaed05b_1629616165.jpg?x-oss-process=image/quality,q_80",
            originalAlt:"با امتیاز دیجی کلاب، اشتراک دیجی پلاس بگیر",
            brand:"/ajsndsj"
        }
        ,{        
            url:"https://dkstatics-public.digikala.com/digikala-adservice-banners/f8a9ded9a5b33f45cdf153ba1fcdb678ddbebe33_1629716355.jpg?x-oss-process=image/quality,q_80",
            originalAlt:"پارتنرشیب - انزانی",
            brand:"/kjasd"
        }
        ,{        
            url:"https://dkstatics-public.digikala.com/digikala-adservice-banners/6d6ac48a7bb1dcd7ceea2c4706e36c32f06a78f2_1629203332.jpg?x-oss-process=image/quality,q_80",
            originalAlt:"پارتنرشیب - گلرنگ",
            brand:"/xyz"
        }
    ]

    const sliderStyle ={
        padding:"5px"

    }

    return (
        <div className="discount-container">
            <div className="discount-slide-container">
                {/*<SimpleImageSlider 
                    images={images} width={814} height={414}
                    showBullets={true} showNavs={true}
                    navSize={40} navStyle={2} slideDuration={1}
                    bgColor={"transparent"}
                    style={sliderStyle}
                />*/}
                <Carousel itemsToShow={1}
                    isRTL={true} enableAutoPlay={true} autoPlaySpeed={5000}
                    style={sliderStyle} 
                    >
                    {images.map(
                        (items) => 
                            <a href={items.brand} target="_blank" title={items.originalAlt} style={{width:"100%",overflow:"hidden"}} rel="noreferrer" >
                                <img src={items.url} alt={items.originalAlt} className="innerSlidePic" loading="lazy" />
                            </a>
                        
                    )}


                </Carousel>

            </div>
            <div className="discount-gif-container">
                <a className="gif-holder" href="/takhfif" title="تخفیف سر ماه" target="_blank">
                    <img src={TopImg}  className="side-gif" alt="تخفیف سر ماه" loading="lazy" />
                </a>
                <a className="gif-holder" href="/takhfif" title="شگفت آویز" target="_blank" >
                    <img src={DownImg} className="side-gif" alt="شگفت آویز" loading="lazy" />
                </a>
            </div>
        </div>
    )
}

export default mainContent
