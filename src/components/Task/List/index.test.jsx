import React from 'react' // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme'
import { TaskListContainer } from './index'

describe('TaskListContainer', () => {
  it('shallow renders without crashing', () => {
    shallow(<TaskListContainer />)
  })
})
