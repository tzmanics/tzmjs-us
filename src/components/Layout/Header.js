import React, { createClass } from 'react'
import { Link } from 'react-router'

let Header = createClass({
  render () {
    return (
      <header>
        <Link to='/'>Menu</Link>
      </header>
    )
  }
})

export default Header
