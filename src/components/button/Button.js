import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button type='button' className='headbtn'>{props.text}</button>
  )
}

export default Button
