import React, {useState, useEffect} from 'react'
import './HamburguerMenu.css'

 const HamburguerMenu = ({ id, handleClick }) => {

    const [classList, setClassList] = useState("hamburger hamburger--collapse")
    const [menuOpen, setMenuOpen] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    const activeMenu = () => {
        if (menuOpen) {
            setClassList("hamburger hamburger--collapse")
            setMenuOpen(false)
            handleClick(menuOpen)
        } else {
            setClassList("hamburger hamburger--collapse is-active")
            setMenuOpen(true)
            handleClick(menuOpen)
        }
    }

    
    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            if(dimensions.width > 767 ) {
               setClassList("hamburger hamburger--collapse") 
               setMenuOpen()
            }
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <button id={id} onClick={activeMenu} className={classList}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default HamburguerMenu;
