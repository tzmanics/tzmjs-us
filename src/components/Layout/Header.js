import React, { createClass } from 'react'
import { Link } from 'react-router'

const Header = createClass({
  render () {
    return (
      <header>
        <ul>
          <li><Link to='/rsvp'>RSVP</Link></li>
          <li><Link to='/'>US</Link></li>
          <li><Link to='/registry'>REGISTRY</Link></li>
        </ul>
      </header>
    )
  }
})

export default Header
