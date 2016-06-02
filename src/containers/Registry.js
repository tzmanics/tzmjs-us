import React, {createClass} from 'react'

import DefaultLayout from '../layouts/Default'

let Registry = createClass({
  render () {
    return (
      <DefaultLayout classes='page-home'>
        <div className='registry-items'>
          <h1>COMING SOON!</h1>
        </div>
      </DefaultLayout>
    )
  }
})

export default Registry

