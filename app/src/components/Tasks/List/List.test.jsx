import React from 'react'
import { shallow } from 'enzyme'
import { TasksList } from './List'
import { TasksListItem } from '../ListItem/ListItem'

describe('TasksList', () => {
  it('shallow renders without crashing', () => {
    shallow(<TasksList />)
  })

  it('should render name', () => {
    const name = 'My List'
    const subject = shallow(<TasksList name={name} />)

    expect(subject.find('h2').props().children).toBe('My List')
  })

  it('should render tasks', () => {
    const tasks = [
      { id: 'a-task', name: 'A Task' },
      { id: 'another-task', name: 'Another Task' }
    ]
    const subject = shallow(<TasksList tasks={tasks} />)

    expect(subject.find(TasksListItem).length).toBe(2)
  })
})
