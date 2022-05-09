import React from 'react'
import { EngTofaNum ,NumberWithCommas } from '../../../utils/numberTools';
import { ReactComponent as Toman } from '../../../icons/Toman.svg';
// import Countdown from 'react-countdown';
import './style.css'


const RecommendHomeCart = ({ imageLink ,isFullWidth , price , oldPrice , link , discription , discount }) => {

    // const e2p = (num) => num.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

    return (
        
        <a key={link} href={`/products/dkp-${link}`} className="minCart" style={{width : isFullWidth && "98%"}} >
            
            <div   >
                <div className="g-minCart minCart-wrapper">
                    <div className="g-Image-container">
                        <img src={imageLink} alt={discription} className="cartImage" loading="lazy" />
                    </div>
                    {/* <Countdown date={Date("2022-03-20")} /> */}
                    <div className="g-discription-row">{discription}</div>
                    <div className="g-newPrize-container ai-center">
                        <div className="flex ai-center" style={{width:"16px"}}>
                            <Toman/>
                        </div>
                        <div className="g-newPrize">
                            {EngTofaNum(NumberWithCommas(price))}
                        </div>
                    </div>
                    <div className="g-prize-row">
                        {oldPrice && <div className="g-oldPrize-container">
                            <div className="g-offerDiscount">{`${EngTofaNum(discount)}٪`} </div>
                            <div className="g-oldPrize">{EngTofaNum(NumberWithCommas(oldPrice))}</div>
                        </div> }
                    </div>
                </div>
            </div>
        </a>
    )
}

export default RecommendHomeCart
