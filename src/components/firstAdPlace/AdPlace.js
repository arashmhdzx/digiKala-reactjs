import React from 'react'

import './style.css'

const AdPlace = ({ links ,topMargin }) => {
    return (
        <div className="adPlaceWrapper" style={{marginTop:topMargin}}>
            {links.map( e => (
            <a href={e.links} className="innerAddPlace-Wrapper" >
                <img src={e.imageSrc} alt={e.alt} className="firstAddPlace-images" />
            </a>
            )
            )}
        </div>
        
            
    )
}

export default AdPlace
