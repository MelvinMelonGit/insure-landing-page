import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const size = ['btn--desktop', 'btn--mobile']
const color = ['btn--dark', 'btn--light']

function Button({children, btnSize, btnColor, btnLink}) {

const checkBtnSize = size.includes(btnSize) ? btnSize : size[0]
const checkBtnColor = color.includes(btnColor) ? btnColor : color[0]

const classes = `${checkBtnSize} ${checkBtnColor}`

  return (
      <>
        {btnLink ?
            (<Link 
                className={classes}
                role="button"
                to={btnLink}
            > 
                {children}
            </Link>  ) : (
            <button className={classes}> 
                {children}
            </button>   
        )}
    </>
  )
}

export default Button