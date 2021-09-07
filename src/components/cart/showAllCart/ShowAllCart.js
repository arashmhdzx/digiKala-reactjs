import React from 'react'
import { ReactComponent as LeftArrow } from './icons/left-arrow.svg'
import './style.css'


const ShowAllCart = () => {
    return (
        
            <a href="/seeAllOffers" className="SpecialCartLinker">
                <div className="showAllCart-container">
                    <div className="left-arrow-btn">
                        <LeftArrow className="leftArrow" />
                    </div>
                    <p className="showAllCart-text">مشاهده همه</p>
                </div>
            </a>
            
        
    )
}

export default ShowAllCart
