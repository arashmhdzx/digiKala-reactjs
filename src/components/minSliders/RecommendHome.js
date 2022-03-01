/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

import Carousel from 'react-elastic-carousel'
import { useSelector } from 'react-redux'


import RecommendHomeCart from '../cart/recommendHomeCart/recommendHomeCart'
import SingleSlideCart from '../cart/RecommendHome-singleCart/SingleSlideCart/SingleSlideCart'
import SingleLoginCart from '../cart/RecommendHome-singleCart/SingleLoginCart/SingleLoginCart'

import './style.css'

const RecommendHome = ({ isSingleCart,  categoryHeader, categoryHeaderAsYourSearched , loginCart , minDatas , isReverse , slideData , isSeeAllBtn}) => {    
    const isLogin = useSelector(state => state.loginStatus.isLog);

    return (
        <div className={`recommendHome `}  >
        <div className="recommendHome-wrapper" style={{ flexDirection: isReverse ? "row-reverse" : "" }} >
            <div className="recommendHomeRight-container" style={{width: "100%",marginLeft: !isReverse && isSingleCart ? "20px" :"0" }}>
                <div className="recommendHomeHeader-wrapper">
                    <div className="recommendHomeHeader">
                        <div className="sliderHeader-wrapper">
                            <span className="RHHeader-text">{categoryHeader}</span>
                            {categoryHeaderAsYourSearched ? <span class="RHheader-asYouSearched">بر اساس بازدیدهای شما</span> : null}
                        </div>
                        <a href="/asnj/" className="seeAllSlider-btn" style={{visibility: isSeeAllBtn ? "visible" :"hidden" }}>
                            < >مشاهده همه</>
                        </a>
                    </div>
                    <div className="recommendHomeHeader-lines">
                        <span className="redLine"></span>
                        <span className="noLine"></span>
                        <span className="normalLine"></span>
                    </div>
                </div>
                <div className="RH-Slider">
                    
                    <Carousel isRTL={true} itemsToShow={5} itemsToScroll={4} itemPadding={[0,5,0,5]} verticalMode={false}>
                        {minDatas.map( data => (
                            <RecommendHomeCart isFullWidth={!isSingleCart}  link={data.link} imageLink={data.imageLink} newPrize={data.newPrize}
                            oldPrize={data.oldPrize} percent={data.percent} isOffer={data.isOffer} discription={data.discription} />
                        ))}
                    </Carousel>

                </div>
            </div>

            {isSingleCart && <div className="recommendHome-singleCartWrapper" style={{ display: isLogin && !isReverse ? "block" : "none" , marginLeft: isReverse ? "20px" : "" }}>
                { isReverse  ? < SingleLoginCart /> : < SingleSlideCart slideData={slideData}  /> }
            </div>}

        </div>
        </div>
    )
}

RecommendHome.defaultProps ={
    isSingleCart:false,
    isSeeAllBtn:true,
    isReverse:false,
    categoryHeaderAsYourSearched:false
}  

export default RecommendHome
