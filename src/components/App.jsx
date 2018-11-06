import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './Header/Header'
import { Main } from './Main/Main'

import './App.css'

const AppComponent = () => (
  <Router>
    <div>
      <Header />
      <Main />
    </div>
  </Router>
)

export const App =
  process.env.NODE_ENV === 'production'
    ? AppComponent
    : hot(module)(AppComponent)
