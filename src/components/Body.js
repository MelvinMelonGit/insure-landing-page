import React from 'react'
import './Body.css'
import FeatureItems from './FeatureItems'
import CallToAction from './CallToAction'

function Body() {
    return (
        <>
            <section className='bodysection'>
                <h2 className='bodysection__title'>We&apos;re different</h2>
                <FeatureItems />
                <CallToAction />
            </section>
        </>
    )
}

export default Body
