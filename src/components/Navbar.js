import React, { useState, useEffect } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { navItems } from './NavItems'
import logo from '../images/logo.svg'
import iconHamburger from '../images/icon-hamburger.svg'
import iconClose from '../images/icon-close.svg'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [mobile, setMobile] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const showMobile = () => {
        if (window.innerWidth <= 960) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    }

    //correct button render on load
    useEffect(() => {
        showMobile()
    }, [])

    window.addEventListener('resize', showMobile)

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar__logo'><img src={logo} alt='logo' /></Link>
                <div className='menu__icon' onClick={handleClick}>
                    {click ? <img src={iconClose} alt='icon-close' /> : <img src={iconHamburger} alt='icon-hamburger' />}
                </div>
                <ul className={click ? 'navbar__links active' : 'navbar__links'}>
                    {navItems.map(navItem => (
                        <li key={navItem.id} className='navbar__link'>
                            <Link to={navItem.to}>{navItem.name}</Link>
                        </li>
                    ))}
                    <li className='navbar__btn'><Button btnLink='/#' btnSize={mobile ? null : 'btn--mobile'}>View Plans</Button></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar