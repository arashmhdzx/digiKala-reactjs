import React from 'react'
import './style.css'

const recommendHomeCart = ({ imageLink ,isFullWidth , newPrize , oldPrize , isOffer, link , discription , percent }) => {

    const e2p = (num) => num.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    
    
    return (
        
        <div className="minCart" style={{width : isFullWidth && "98%"}} >
            
            <a href={link}  >
                <div className="g-minCart minCart-wrapper">
                    <div className="g-Image-container">
                        <img src={imageLink} alt={""} className="cartImage" loading="lazy" />
                    </div>
                    <div className="g-discription-row">{discription}</div>
                    <div className="g-prize-row">
                        {isOffer ? <div className="g-oldPrize-container">
                            <div className="g-offerDiscount">{`${e2p(percent)}٪`} </div>
                            <div className="g-oldPrize">{e2p(oldPrize)}</div>
                        </div> : null}
                        <div className="g-newPrize-container">
                            <span className="">تومان</span>
                            <div className="g-newPrize">
                                {isOffer ? `${e2p(newPrize)}` : `${e2p(oldPrize)}` }
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default recommendHomeCart
