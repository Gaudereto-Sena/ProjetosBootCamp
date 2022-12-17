import React from 'react';
import styles from "./Button.module.css";
import Proptypes from 'prop-types';

const Button = ({id, children, estiloInline, funcaoOnClick}) => {
  return (
    <button id ={id} className={styles.button}
            onClick={funcaoOnClick}
            style={estiloInline}>
        {children}
    </button>
  )
}

Button.propTypes = {
  id: Proptypes.string,
  children: Proptypes.string,
  estiloInline: Proptypes.object,
  funcaoOnClick: Proptypes.func
}

Button.defaultProps = {
  id: '',
  children: 'Clique aqui!',
  estiloInline: {},
  funcaoOnClick: null
}

export default Button
