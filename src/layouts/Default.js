import React, {createClass} from 'react'

import Header from '../components/Layout/Header'

let DefaultLayout = createClass({
  render () {
    return (
      <div className={`${this.props.classes} page`}>
        <section classname="top row">
          <Header />
        </section>
        <section classname="middle row">
          {this.props.children}
        </section>
      </div>
    )
  }
})

export default DefaultLayout
