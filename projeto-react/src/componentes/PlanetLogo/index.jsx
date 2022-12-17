import "./PlanetLogo.css"

import React from 'react'

const PlanetLogo = ({style}) => {
    return (
        <div className="container" style={style}>
            <div className="circle-container">
                <div className="outer-ring">
                    <div className="satelite">
                    </div>
                </div>

                <div className="circle">
                    <div className="front">
                    </div>
                    <div className="back">
                        <p>Sky Dream</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetLogo;
