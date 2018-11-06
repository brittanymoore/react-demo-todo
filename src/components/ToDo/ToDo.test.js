import React from 'react' // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme'
import { ToDo } from './ToDo'

describe('ToDo', () => {
  it('shallow renders without crashing', () => {
    shallow(<ToDo />)
  })
})