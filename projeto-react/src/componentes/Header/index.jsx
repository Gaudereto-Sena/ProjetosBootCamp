import React from 'react'
import Avatar from '../Avatar'
import styles from './Header.module.css'
import logo from '../../assets/Icones/logo.png'
import { Link } from 'react-router-dom'
import HamburguerMenu from '../HamburguerMenu'
import { useState } from 'react'
import { useEffect } from 'react'
import {FaUserAstronaut} from 'react-icons/fa'

const Header = () => {
    const [classList, setClassList] = useState('')
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const handleClickMenu = (menuOpen) => {
        alternarMenu(menuOpen)
    }

    const alternarMenu = (menuOpen) => {
        menuOpen ? setClassList('') : setClassList(styles.menu_open)
    }

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            dimensions.width > 767 ? alternarMenu(true) : console.log('')
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <header className={styles.header}>
            <Avatar
                id={styles.logo}
                image={logo}
            />
            <HamburguerMenu id={styles.menu_hamburguer} handleClick={(menuOpen) => handleClickMenu(menuOpen)} />
            <ul className={classList}>
                <li><Link to='/catalogo'>Catalogo</Link></li>
                <li><Link to='/carrinho'>Carrinho</Link></li>
                <li className={styles.user}><Link to='/login'><FaUserAstronaut/></Link></li>
            </ul>
        </header>
    )
}

export default Header