import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Info from './containers/Info'
import Rsvp from './containers/Rsvp'
import Registry from './containers/Registry'
import './styles/main.scss'

let routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='info' component={Info} />
      <Route path='rsvp' component={Rsvp} />
      <Route path='registry' component={Registry} />
    </Route>
  </Router>
)

render(routes, document.getElementById('root'))
