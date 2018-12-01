import React from 'react'
import { shallow } from 'enzyme'
import { TaskList } from './List'
import { TaskListItem } from '../../ListItem/ListItem'

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

    expect(subject.find(TaskListItem).length).toBe(2)
  })
})
