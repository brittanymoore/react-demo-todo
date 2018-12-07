import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './state/store/configure-store'
import { getTasks } from './state/actions/tasks'

import 'normalize.css'
import '../node_modules/material-design-icons/iconfont/material-icons.css'
import './global.css'

const store = configureStore()
store.dispatch(getTasks())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
