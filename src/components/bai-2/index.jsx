import React from 'react'
import './styles.css'
const Input = (props) => {
  return (
    <div className='input'>
        <input type="text" placeholder={props.text}/>
    </div>
  )
}

export default Input