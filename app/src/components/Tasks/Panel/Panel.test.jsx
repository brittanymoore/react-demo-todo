import React from 'react'
import { shallow } from 'enzyme'
import { TasksPanel } from '.'

describe('TasksPanel', () => {
  it('shallow renders without crashing', async () => {
    shallow(<TasksPanel />)
  })
})
