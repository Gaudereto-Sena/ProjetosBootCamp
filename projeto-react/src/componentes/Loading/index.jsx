import React from 'react'
import styles from './Loading.module.css'
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className={styles.loading}><CircularProgress color="inherit"/></div>
  )
}

export default Loading