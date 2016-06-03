import React, {createClass} from 'react'

import DefaultLayout from '../layouts/Default'
import Invitation from '../components/Invitation'

let Home = createClass({
  render () {
    return (
      <DefaultLayout classes='page-home'>
        <div className='main-container'>
          <Invitation />
        </div>
      </DefaultLayout>
    )
  }
})

export default Home
