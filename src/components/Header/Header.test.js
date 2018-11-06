import React from 'react' // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme'
import { Header } from './Header'

describe('Header', () => {
  it('shallow renders without crashing', () => {
    shallow(<Header />)
  })
})