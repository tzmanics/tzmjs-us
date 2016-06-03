import React, { createClass } from 'react'

let containerClasses = 'rsvp-container container'

const RsvpForm = createClass({
  render () {
    return (
      <div className={containerClasses}>
        <form
          action='MAILTO:tzmanics@gmail.com?subject=RSVP for TZM + MJS Wedding!'
          method='POST' encType='text/plain'
        >
          <h3>Name <input type='text' name='name' tabindex='1' required autoFocus /></h3>
          <input type='radio' name='rsvp' value='yay' tabindex='2' /> YAY
          <input type='radio' name='rsvp' value='nay' tabindex='3' /> NAY <br />
          <h3>Who's coming? <input type='text' name='guests' tabindex='4' /></h3>
          <h3>Message <input type='textarea' name='message' placeholder='optional' tabindex='5' /></h3> <br />
          <div className='button-space'>
            <button>RSVP</button>
          </div>
        </form>
        <p>Plans change, we get it!</p>
        <p>Come back and update your RSVP anytime!</p>
        <p>Of course...the sooner the better :)</p>
      </div>
    )
  }

})

export default RsvpForm
