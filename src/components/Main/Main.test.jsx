import React from 'react' // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme'
import { Main } from './Main'

describe('Main', () => {
  it('shallow renders without crashing', () => {
    shallow(<Main />)
  })
})