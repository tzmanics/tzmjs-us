import React, { createClass } from 'react'

const Invitation = createClass({
  render () {
    return (
      <div className='invite-container container'>
        <div className='invite-section'>
          <h3>together with their families</h3>
          <h1>TARA ZVEZDA MANICSIC &amp;</h1>
          <h1>MATTHEW JOHNSEN SWAIDAN</h1>
        </div>
        <div className='invite-section'>
          <h3>invite you to celebrate their union on</h3>
          <h2>10 SEPTEMBER 2016 AT 4PM</h2>
        </div>
        <div className='invite-section'>
          <h3>at their home</h3>
          <h2>4431 STATION AVENUE</h2>
          <h2>CINCINNATI, OH 45232</h2>
        </div>
        <div className='invite-footer'>
          <h4>DINNER, DRINKS &amp; DANCING TO FOLLOW</h4>
        </div>
      </div>
    )
  }
})

export default Invitation

