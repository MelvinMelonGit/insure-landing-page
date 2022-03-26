import React from 'react'
import { SocialMediaLinks } from './FooterSocialData'
import { Link } from 'react-router-dom'

function FooterSocial() {
    return (
        <ul>
            {SocialMediaLinks.map(SocialMediaLink => (
                <Link key={SocialMediaLink.id} to={SocialMediaLink.src} className='footer__social__links'>
                    <img src={SocialMediaLink.icon} alt={SocialMediaLink.alt} />
                </Link>
            ))}
        </ul>
    )
}

export default FooterSocial
