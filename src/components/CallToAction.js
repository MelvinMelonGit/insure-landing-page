import React from 'react'
import './CallToAction.css'
import Button from './Button';

function CallToAction() {
    return (
        <section className='calltoaction'>
            <h2 className='calltoaction__title'>Find out more about how we work</h2>
            <Button btnLink='/how-we-work' btnColor='btn--light'>How We Work</Button>
        </section>
    )
}

export default CallToAction
