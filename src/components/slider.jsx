/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

import Carousel from 'react-elastic-carousel'
import { useSelector } from 'react-redux'




import './style.css'

const RecommendHome = ({ minData:data }) => {    
    const isLogin = useSelector(state => state.loginStatus.isLog);

    return (
        <div className={`recommendHome `}  >
        <div className="recommendHome-wrapper" style={{ }} >
            <div className="recommendHomeRight-container" style={{width: "100%" }}>
                <div className="recommendHomeHeader-wrapper">
                    <div className="recommendHomeHeader">
                        <div className="sliderHeader-wrapper">

                        </div>
                        <a href="/asnj/" className="seeAllSlider-btn" style={{visibility: "visible" }}>
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
                        {data.map( data => (
                            <div >
                                <img src={data.mainImage} alt={data.title}/>
                                <h4>{data.title}</h4>
                                <div>{data.oldData}</div>
                            </div>
                        ))}
                    </Carousel>

                </div>
            </div>



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
