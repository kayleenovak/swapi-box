import React from 'react'
import './Yoda.scss'


const Yoda = () => {
  return (
    <div className='yoda-container'>
      <p className='choose-path'>Choose a path you must...</p>
      <img src='./images/yoda.png' />
      <div className='lightsaber'>
        <div className='saber'></div>
        <div className='handle'></div>
      </div>
    </div>

    )
}

export default Yoda;