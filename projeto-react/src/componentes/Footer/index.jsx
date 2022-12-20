import React from 'react'
import './footer.css'
import logo from '../../assets/Icones/logo_text.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
                <span className="footer-logo">
                    <img src={logo} alt="" />
                </span>

                <div className="footer-copyright">
                    <p>&copy; Site desenvolvido por Gustavo Sena</p>
                </div>

                <div className="footer-links">
                    <ul>
                        <li>
                            <a href="https://github.com/Gaudereto-Sena" target="_blank" rel="noreferrer">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5532991611574" target="_blank" rel="noreferrer">
                                <WhatsAppIcon />
                            </a>

                        </li>
                        <li>
                            <a href="mailto:gaudereto.sena@gmail.com" target="_blank" rel="noreferrer">
                                <EmailIcon />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer