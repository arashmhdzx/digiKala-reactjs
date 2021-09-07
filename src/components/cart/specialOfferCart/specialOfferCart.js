import React from 'react'
import {ReactComponent as Plus} from './icons/plus.svg'
import {ReactComponent as Clock} from './icons/clock.svg'

import './style.css'


const specialOfferCart = ({ imageLink , imgAlt, discription , cashGift, cashGiftPrize ,offerTime , offerPercent , oldPrize , newPrize , cartLink}) => {
    //should take a string for change into persian numbers
    const e2p = (s) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);          
    const completed = 37;
    return (
        <div className="SpecialCartLinker">
            <a href={cartLink} title={imgAlt} >
                <div className="SpecialCart-container">
                    <div className="SOImage-container">
                        <img src={imageLink} alt={imgAlt} className="SOImage" loading="lazy" />
                    </div>
                    <div className="discription-SOffer">{discription}</div>

                    <div className="cachGift">
                        <div className={`cashGiftText ${cashGift ? "" : "invisible"}`}> 
                            <div className="cashGift-container">
                                <Plus className="cashGiftIcon" />
                                <div className="cashGiftText">
                                    {`${e2p(cashGiftPrize)} تومان هدیه نقدی `}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prizeSection">

                        <div className="upperSectionPrize">
                            <div className="oldPrize">
                                {e2p(oldPrize)}
                            </div>

                            <div className="offerPercent-container">
                                {`${e2p(offerPercent)} ٪`}    
                            </div>
                        </div>

                        <div className="downSectionPrize">
                            <div className="newPrize-wrapper">
                                {e2p(newPrize)}
                            </div>
                            
                            
                            <span className="currency-wrapper">تومان</span>
                        </div>

                    </div>

                    
                    <div className="progress-bar">
                        <div className="progress-bar-filled" style={{width:`${completed}%`}}>
                        </div>
                    </div>

                    <div className="time-remained">    

                        <div className="js-time-countDown">{e2p("13:17:52")}</div>
                        <Clock />
                        
                    </div>
                </div>
            </a>
        </div>
    )
}

export default specialOfferCart
