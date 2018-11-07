import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { ScreensToDo } from './ToDo'

export const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route exact path="/todo" component={ScreensToDo} />
      <Redirect from="/" to="/todo" />
    </Switch>
  </Router>
)
