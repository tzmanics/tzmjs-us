import React, {createClass} from 'react'

import DefaultLayout from '../layouts/Default'

let Home = createClass({
  render () {
    return (
      <DefaultLayout classes='page-home'>
        <div className='wrap-container container'>
        </div>
      </DefaultLayout>
    )
  }
})

export default Home