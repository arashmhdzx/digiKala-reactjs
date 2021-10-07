import React from 'react'
import Carousel from 'react-elastic-carousel'
import './style.css'

const SingleSlideCart = ({ slideData }) => {
    const e2p = (num) => num.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    return (
        <div className="g-singleCart" > 
            <div className="singleCartHeader-container">
                <div className="customSingleHeader">پیشنهادهای لحظه‌ای برای شما</div>
                <div className="SingleNormalLine">
                <div className="progress-bar-filled" style={{width:`${"completed"}%`}} />
                </div>
            </div>
            <div className="singleSlider-wrapper">
                
                <Carousel showArrows={false} itemsToShow={1} itemsToScrol={1}
                isRTL={true} verticalMode={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                {slideData.map(e => (
                    <div className="singleSlider-innerWrapper">
                    <div className="sliderWrapper">
                        <a href={e.cartLink}>
                            <div  className="imageLinkWrapper">
                                <img src={e.imageSrc} alt={e.imageAlt} className="SOImage " />
                            </div>

                             <div className="g-discription-row customDisc">{e.imageDiscription}</div>
                        </a>
                        <div className="g-prize-row">
                            <div className="g-oldPrize-container">
                                <div className="g-offerDiscount">{`${e2p(e.offerPercent)}٪`} </div>
                                <div className="g-oldPrize">{e2p(e.oldPrize)}</div>
                            </div>
                            <div className="g-newPrize-container">
                                <span className="">تومان</span>
                                <div className="g-newPrize">
                                    {`${e2p(e.newPrize)}`}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
                </Carousel>
               
            </div>
        </div>
    )
}

export default SingleSlideCart
