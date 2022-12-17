import React from 'react';
import styles from "./Avatar.module.css"
import PropTypes from 'prop-types';

const Avatar = ({id, isBackgroundImage, image, alt, containerEstiloInline, imageEstiloInline, backgroundSize, hasMask, maskStyle, children}) => {
    return (
        <>
            {isBackgroundImage ?
                <div id={id} className={styles.containerImg}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize,
                        ...containerEstiloInline}}>
                            {hasMask ? <div className={styles.mask} style={maskStyle}></div> : ""}
                            {children}
                </div> :
                <div id={id} className={styles.containerImg} style={containerEstiloInline}>
                    <img src={image} alt={alt} style={{ ...imageEstiloInline }} />
                    {hasMask ? <div className={styles.mask} style={maskStyle}></div> : ""}
                    {children}
                </div>}
        </>
    )
}

Avatar.propTypes = {
    id: PropTypes.string,
    isBackgroundImage: PropTypes.bool,
    image: PropTypes.string,
    alt: PropTypes.string,
    containerEstiloInline: PropTypes.object,
    imageEstiloInline: PropTypes.object,
    backgroundSize: PropTypes.string,
    hasMask: PropTypes.bool,
    maskStyle: PropTypes.object,
    children: PropTypes.string
    
}

Avatar.defaultProps = {
    id: '',
    isBackgroundImage: false,
    image: "",
    alt: "",
    containerEstiloInline: {},
    imageEstiloInline: {},
    backgroundSize: "",
    hasMask: false,
    maskStyle: {},
    children: ""
}

export default Avatar
