import React, {createClass} from 'react'

import DefaultLayout from '../layouts/Default'

let Registry = createClass({
  render () {
    return (
      <DefaultLayout classes='page-home'>
        <h1>
          Check out our registry
          on <a href='http://www.wanderable.com/hm/tzmjs'>Wanderable.com</a>!
        </h1>
        <h4>
          If you choose a gift you can change the Paymet Method dropdown to
          bring a check ot cash for your present to the wedding. Thanks so much!
        </h4>
      </DefaultLayout>
    )
  }
})

export default Registry

