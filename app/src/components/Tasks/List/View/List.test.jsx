import React from 'react'
import { shallow } from 'enzyme'
import { TasksListView } from '.'
import { TasksListItem } from '../../ListItem'

describe('TasksListView', () => {
  it('shallow renders without crashing', () => {
    shallow(<TasksListView />)
  })

  it('should render name', () => {
    const name = 'My List'
    const subject = shallow(<TasksListView name={name} />)

    expect(subject.find('h2').props().children).toBe('My List')
  })

  it('should render tasks', () => {
    const tasks = [
      { id: 'a-task', name: 'A Task' },
      { id: 'another-task', name: 'Another Task' }
    ]
    const subject = shallow(<TasksListView tasks={tasks} />)

    expect(subject.find(TasksListItem).length).toBe(2)
  })
})
