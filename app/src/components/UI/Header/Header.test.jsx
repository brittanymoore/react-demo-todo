import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '.'

describe('Header', () => {
  it('shallow renders without crashing', () => {
    shallow(<Header />)
  })
})
