import React from 'react'
import { shallow } from 'enzyme'
import { AddTask } from './AddTask'

describe('AddTask', () => {
  it('shallow renders without crashing', () => {
    shallow(<AddTask />)
  })
})