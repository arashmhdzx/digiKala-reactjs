/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Carousel from 'react-elastic-carousel'
import RecommendHomeCart from '../cart/recommendHomeCart/recommendHomeCart'
import SingleSlideCart from '../cart/RecommendHome-singleCart/SingleSlideCart/SingleSlideCart'
import SingleLoginCart from '../cart/RecommendHome-singleCart/SingleLoginCart/SingleLoginCart'

import './style.css'

const RecommendHome = ({ isSingleCart,  categoryHeader, categoryHeaderAsYourSearched , loginCart , minDatas , isReverse , slideData , isSeeAllBtn}) => {    
    // const minCartWidth = (x) =>{
    //     if (x===true){
    //         var elements = document.getElementsByClassName("minCart");
    //         for (var i = 0; i < elements.length; i++) {
    //             elements[i].style.width=("97%");
    //         }
    //     }
    //  }
    return (
        <div className={`recommendHome `}  >
        <div className="recommendHome-wrapper" style={{ flexDirection: isReverse ? "row-reverse" : "" }} >
            <div className="recommendHomeRight-container" style={{width: isSingleCart ? "79%" : "100%",marginLeft: isSingleCart ? "20px" :"0" }}>
                <div className="recommendHomeHeader-wrapper">
                    <div className="recommendHomeHeader">
                        <div className="sliderHeader-wrapper">
                            <span class="RHHeader-text">{categoryHeader}</span>
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
                    
                    <Carousel isRTL={true} itemsToShow={4} itemsToScroll={3} itemPadding={[0,5,0,5]} verticalMode={false}>
                        {minDatas.map( data => (
                            <RecommendHomeCart isFullWidth={!isSingleCart}  link={data.link} imageLink={data.imageLink} newPrize={data.newPrize}
                            oldPrize={data.oldPrize} percent={data.percent} isOffer={data.isOffer} discription={data.discription} />
                        ))}
                    </Carousel>

                </div>
            </div>

            {isSingleCart && <div className="recommendHome-singleCartWrapper" style={{marginLeft: isReverse ? "20px" : "" , width:isReverse? "21%" :""}}>
                { isReverse ? < SingleLoginCart /> : < SingleSlideCart slideData={slideData}  /> }
            </div>}

        </div>
        </div>
    )
}


export default RecommendHome
