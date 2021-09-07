import React from 'react'
import AsideImg from './images/asideImg.jpg'
import './style.css'


const asideContent = () => {
    return (
        <div className="asideImg-container">
            <img src={AsideImg} className="asideImage" alt="یه دعوت صد میلیونی" width="auto" height="78px" loading="lazy" target="_blank" />
        </div>
    )
}

export default asideContent
