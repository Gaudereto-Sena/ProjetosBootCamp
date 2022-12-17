import React from 'react'
import styles from './Toltip.module.css'

export const Toltip = ({title, estiloInline}) => {
  return (
    <div className={styles.toltip} style={estiloInline}>{title}</div>
  )
}
