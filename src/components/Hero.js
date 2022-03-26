import React, { useState, useEffect } from 'react'
import './Hero.css'
import imageDesktop from '../images/image-intro-desktop.jpg'
import imageMobile from '../images/image-intro-mobile.jpg'
import Button from './Button';

function Hero() {
  const [mobile, setMobile] = useState(false)

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
    <section className='hero'>
      <div className='hero__text'>
        <h1 className='hero__title'>Humanizing your insurance.</h1>
        <p className='hero__content'> Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that&apos;s right for you. Ensure you and your loved ones are protected.</p>
        <Button btnLink='/view-plans' btnColor='btn--light'>View Plans</Button>
      </div>
      {mobile ? <img src={imageMobile} alt='mobile' className='hero__img__desktop' /> : <img src={imageDesktop} alt='desktop' className='hero__img__mobile' />}
    </section >
  )
}

export default Hero