import React, {createClass} from 'react'

import Header from '../components/Layout/Header'

let DefaultLayout = createClass({
  render() {
    return (
      <div className={`${this.props.classes} page`}>
        <Header />
      </div>
    )
  }
})

export default DefaultLayout
