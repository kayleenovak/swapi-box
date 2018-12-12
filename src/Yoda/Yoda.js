import React from 'react'
import './Yoda.scss'


const Yoda = () => (
  <div className="yoda-container">
    <p className="choose-path">Choose a path you must...</p>
    <img src="../images/yoda.png" alt="Yoda" />
    <div className="lightsaber">
      <div className="saber" />
      <div className="handle" />
    </div>
  </div>
)

export default Yoda
