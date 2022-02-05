import React from 'react'
import Carousel from 'react-elastic-carousel'
import SpecialOfferCart from '../cart/specialOfferCart/specialOfferCart';
import ShowAllCart from '../cart/showAllCart/ShowAllCart';

import { ReactComponent as LeftArrow  } from './icons/arrowhead-left.svg';
import SidePic from './images/side.png'
import './style.css'


const Special = ({theme , slideData ,newClass }) => {

 
    
  return (
    <section className={`offerSection ${newClass}`} style={{backgroundColor:theme}}>
      <div className="offerContainer">
        <a href="/incredible-offers/" className="rightSection">
          <img src={SidePic} alt="پیشنهاد شگفت‌&zwnj;انگیز" className="incredible-offers-wrapper" />
          <div className="seeAllBtn">
            <LeftArrow className="leftArrowContainer" />
            <p className="textBtn"> مشاهده همه </p>
          </div>
        </a>
      <div className="SOfferSlider">
        <Carousel isRTL={true} itemsToShow={4} itemsToScroll={3} itemPadding={[0,5,0,5]} >
          {slideData.map(item => (
              <SpecialOfferCart imageLink={item.imageSrc} imgAlt={item.imageAlt} discription={item.imageDiscription}  cashGift={item.cashGift} cashGiftPrize={item.cashPrize} offerPercent={item.offerPercent} oldPrize={item.oldPrize} newPrize={item.newPrize} cartLink={item.cartLink} />
          )
          )}
          <ShowAllCart />
        </Carousel>
      </div>
    
    </div>
    
    
  
    </section>
  )
}

export default Special
