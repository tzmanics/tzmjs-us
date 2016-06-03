import React, { createClass } from 'react'

let containerClasses = 'info-container container'

const InfoCard = createClass({
  render () {
    return (
      <div className={containerClasses}>
        <div className='info-section'>
          <h2>CEREMONY</h2>
          <p>We would like you to be in the moment with us...</p>
        </div>
        <div className='info-section'>
          <h2>RECEPTION</h2>
          <p>After the ceremony the reception will take place in out yard...</p>
        </div>
        <div className='info-section'>
          <h2>REGISTRY</h2>
          <p>Our relationship has been built on many fun adventures...</p>
        </div>
        <div className='info-section'>
          <h2>LODGING</h2>
          <p>We've reserved a block of rooms...</p>
        </div>
      </div>
    )
  }
})

export default InfoCard

