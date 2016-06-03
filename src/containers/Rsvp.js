import React, {createClass} from 'react'

import DefaultLayout from '../layouts/Default'
import RsvpForm from '../components/RsvpForm'

let Rsvp = createClass({
  render () {
    return (
      <DefaultLayout classes='page-home'>
        <div className='rsvp-section'>
          <RsvpForm />
        </div>
      </DefaultLayout>
    )
  }
})

export default Rsvp

