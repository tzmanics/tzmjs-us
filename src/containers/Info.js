import React, {createClass} from 'react'

import DefaultLayout from '../layouts/Default'
import InfoCard from '../components/InfoCard'

let Info = createClass({
  render () {
    return (
      <DefaultLayout classes='page-home'>
        <div className='info-section'>
          <InfoCard />
        </div>
      </DefaultLayout>
    )
  }
})

export default Info

