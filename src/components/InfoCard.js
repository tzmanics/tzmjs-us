import React, { createClass } from 'react'
import { Link } from 'react-router'

let containerClasses = 'info-container container'

const InfoCard = createClass({
  render () {
    return (
      <div className={containerClasses}>
        <div className='info-section'>
          <h2>CEREMONY</h2>
          <div className='info-text'>
            <p>
               We would like you to be in the moment with us so we've hired
               professional photographers to document the ceremont, so please
               leave the picture taking to them.
            </p>
          </div>
        </div>
        <div className='info-section'>
          <h2>RECEPTION</h2>
          <div className='info-text'>
            <p>
              After the ceremony the reception will take place in our yard.
              Dinner in the front, dancing &amp; dj in the back. We will be
              dressed very beautifully but there is no dress code. Everything
              will take place outside, so wear whatever makes you feel lovely.
            </p>
          </div>
        </div>
        <div className='info-section'>
          <h2>REGISTRY</h2>
          <div className='info-text'>
            <p>
              Our relationship has been built on many fun adventures together. In
              lieu of gifts, we would love for you to help us plan our honeymoon.
              Please visit <Link to='/registry'>our registry</Link>.
            </p>
          </div>
        </div>
        <div className='info-section'>
          <h2>LODGING</h2>
          <div className='info-text'>
            <p>
              We've reserved a block of rooms at the nearest hotel:
              <a href='https://goo.gl/maps/YB18cjcq1Ds'>Quality Inn &amp;
              Suites</a> under Manicsic or Swaidan. There are also
              <a href='http://bit.ly/1VAyR4F'> airbnb.com</a> rentals
              close by.
            </p>
          </div>
        </div>
      </div>
    )
  }
})

export default InfoCard

