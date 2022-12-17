import React from 'react'
import styles from './Text.module.css'
import PropTypes from 'prop-types'

const Text = ({ type, children, estiloInline, loadWidth }) => {

    switch (type) {
        case 'h1':
            return <h1 onLoad={loadWidth} className={styles.text} style={estiloInline}>{children}</h1>
        case 'h2':
            return <h2 onLoad={loadWidth} className={styles.text} style={estiloInline}>{children}</h2>
        case 'h3':
            return <h3 onLoad={loadWidth} className={styles.text} style={estiloInline}>{children}</h3>
        case 'h4':
            return <h4 onLoad={loadWidth} className={styles.text} style={estiloInline}>{children}</h4>
        case 'h5':
            return <h5 onLoad={loadWidth} className={styles.text} style={estiloInline}>{children}</h5>
        case 'h6':
            return <h6 onLoad={loadWidth} className={styles.text} style={estiloInline}>{children}</h6>
        case 'p':
            return <p onLoad={loadWidth} className={styles.text} style={estiloInline}>{children}</p>
        default:
            return <p onLoad={loadWidth} className={styles.text} style={estiloInline}>{children}</p>
    }
}

Text.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    estiloInline: PropTypes.object,
}

Text.defaultProps = {
    type: "p",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos tempore nulla ab aliquam repellat sit, quam porro, quae possimus, totam vero minus harum deleniti blanditiis necessitatibus non? Sunt, similique. ",
    estiloInline: {}
}

export default Text
