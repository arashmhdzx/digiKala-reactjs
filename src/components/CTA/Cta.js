import React from 'react'
import AsideContent from './asideContent/asideContent'
import MainContent from './mainContent/mainContent'
import './style.css'

const CTA = () => {
    return (
        <section className="cta-container">
            <div className="cta-width" >
                <AsideContent />
                <MainContent />
            </div>
        </section>
    )
}

export default CTA
