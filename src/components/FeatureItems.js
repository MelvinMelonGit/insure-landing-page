import React from 'react'
import './FeatureItems.css'
import iconSnappy from '../images/icon-snappy-process.svg'
import iconPrices from '../images/icon-affordable-prices.svg'
import iconPeople from '../images/icon-people-first.svg'


const featureItems = [
    {
        id: 1,
        icon: iconSnappy,
        alt: 'icon-snappy',
        heading: 'Snappy Process',
        content: 'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.'
    },
    {
        id: 2,
        icon: iconPrices,
        alt: 'icon-prices',
        heading: 'Affordable Prices',
        content: 'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.'
    },
    {
        id: 3,
        icon: iconPeople,
        alt: 'icon-people',
        heading: 'People First',
        content: 'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.'
    }
]

function FeatureItems() {

    return (
        <div className='featureitems'>
            {featureItems.map(featureItem => (
                <div key={featureItem.id} className='featureitems__container'>
                    <img src={featureItem.icon} alt={featureItem.alt} className='featureitems__icon' />
                    <h3 className='featureitems__title'>{featureItem.heading}</h3>
                    <p className='featureitems__content'>{featureItem.content}</p>
                </div>
            ))}
        </div>
    )
}

export default FeatureItems
