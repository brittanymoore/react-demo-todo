import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { ScreensTasks } from './Tasks'

export const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route exact path='/tasks' component={ScreensTasks} />
      <Redirect from='/' to='/tasks' />
    </Switch>
  </Router>
)
