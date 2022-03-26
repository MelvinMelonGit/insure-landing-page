import React from 'react'
import './FooterLinks.css'
import { FooterLinksData } from './FooterLinksData'
import { Link } from 'react-router-dom'

function FooterLinks() {
    return (
        <ul className='footerlinks'>
            {FooterLinksData.map(FooterLinksData => (
                <li key={FooterLinksData.id} className='footerlinks__title'>
                    {FooterLinksData.title}
                    <ul>
                        {FooterLinksData.links.map(subData => (
                            <li key={subData.id} className='footerlinks__subtitle'>
                                <Link to={subData.to}>{subData.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default FooterLinks
