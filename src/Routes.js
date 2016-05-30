import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import './styles/main.scss'

let routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

render(routes, document.getElementById('root'))
