import React from 'react'
import { shallow } from 'enzyme'
import td from 'testdouble'
import TasksListContainer from '.'
import TasksListView from './View'

describe('TasksListContainer', () => {
  it('shallow renders without crashing', () => {
    shallow(<TasksListContainer.WrappedComponent />)
  })

  it('should display tasks', () => {
    const tasks = [{ id: 'the-task' }]
    const subject = shallow(
      <TasksListContainer.WrappedComponent tasks={tasks} />
    )

    expect(subject.find(TasksListView).props().tasks).toEqual(tasks)
  })

  it('should handle toggle', () => {
    const updateTask = td.func()
    const tasks = [{ id: 'the-first' }, { id: 'the-second' }]
    const subject = shallow(
      <TasksListContainer.WrappedComponent
        tasks={tasks}
        updateTask={updateTask}
      />
    )

    subject.find(TasksListView).simulate('toggle', 'the-first')

    td.verify(updateTask({ id: 'the-first', complete: true }))
  })
})
