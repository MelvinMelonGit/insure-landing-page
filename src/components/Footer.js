import React from 'react'
import FooterLinks from './FooterLinks'
import FooterSocial from './FooterSocial'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <Link to='/' className='footer__logo'><img src={logo} alt='logo' /></Link>
                <FooterSocial />
            </div>
            <FooterLinks />
        </footer>
    )
}

export default Footer
