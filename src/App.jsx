import React from 'react'
import { hot } from 'react-hot-loader'
import { ScreensRoot } from './screens/Root';
import { Header } from './components/UI/Header/Header';

const AppComponent = () => (
  <div id="app">
    <Header />
    <main>
      <ScreensRoot />
    </main>
  </div>
)

export const App =
  process.env.NODE_ENV === 'production'
    ? AppComponent
    : hot(module)(AppComponent)
