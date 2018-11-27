import React from 'react'
import { shallow } from 'enzyme'
import { TaskList } from './List'
import { Task } from '../../Task/Task'

describe('TaskList', () => {
  it('shallow renders without crashing', () => {
    shallow(<TaskList />)
  })

  it('should render name', () => {
    const name = 'My List'
    const subject = shallow(<TaskList name={name} />)

    expect(subject.find('h2').props().children).toBe('My List')
  })

  it('should render tasks', () => {
    const tasks = [
      { id: 'a-task', name: 'A Task' },
      { id: 'another-task', name: 'Another Task' }
    ]
    const subject = shallow(<TaskList tasks={tasks} />)

    expect(subject.find(Task).length).toBe(2)
  })
})
