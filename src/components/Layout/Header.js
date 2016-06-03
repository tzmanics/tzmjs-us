import React, { createClass } from 'react'
import { Link } from 'react-router'

const Header = createClass({
  render () {
    return (
      <header>
        <nav id='navigation'>
          <ul>
            <li><Link to='/rsvp'>RSVP</Link></li>
            <li><Link to='/'>INVITE</Link></li>
            <li><Link to='/info'>INFO</Link></li>
            <li><Link to='/registry'>REGISTRY</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
})

export default Header
