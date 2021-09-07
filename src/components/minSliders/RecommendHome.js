import React from 'react'
import Carousel from 'react-elastic-carousel'
import RecommendHomeCart from '../cart/recommendHomeCart/recommendHomeCart'
import SingleSlideCart from '../cart/RecommendHome-singleCart/SingleSlideCart/SingleSlideCart'
import SingleLoginCart from '../cart/RecommendHome-singleCart/SingleLoginCart/SingleLoginCart'

import './style.css'

const RecommendHome = ({  categoryHeader, categoryHeaderSearched , isFirst , loginCart , minDatas , isReverse , slideData}) => {    
    
    return (
        <div className={`recommendHome-wrapper ${isFirst ? "" : "reverseFlex" }`}>
            <div className="recommendHomeRight-container">
                <div className="recommendHomeHeader-wrapper">
                    <div className="recommendHomeHeader">
                        <span class="RHHeader-text">{categoryHeader}</span>
                        {categoryHeaderSearched ? <span class="RHheader-asYouSearched">بر اساس بازدیدهای شما</span> : null}
                    </div>
                    <div className="recommendHomeHeader-lines">
                        <span className="redLine"></span>
                        <span className="noLine"></span>
                        <span className="normalLine"></span>
                    </div>
                </div>
                <div className="RH-Slider">
                    <Carousel isRTL={true} itemsToShow={4} itemsToScroll={3} verticalMode={false}>
                        {minDatas.map( data => (
                            <RecommendHomeCart  link={data.link} imageLink={data.imageLink} newPrize={data.newPrize}
                            oldPrize={data.oldPrize} percent={data.percent} isOffer={data.isOffer} discription={data.discription} />
                        ))}
                        
                    
                    </Carousel>

                </div>
            </div>
            <div  className="recommendHome-singleCartWrapper">
                { isReverse ? < SingleLoginCart /> : < SingleSlideCart slideData={slideData} /> }
            </div>
        </div>
    )
}


export default RecommendHome
