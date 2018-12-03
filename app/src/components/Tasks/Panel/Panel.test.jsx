import React from 'react'
import { shallow } from 'enzyme'
import { TasksPanel } from '.'
import { TasksList } from '../List'
import { TasksFormContainer } from '../Form'

describe('TasksPanel', () => {
  it('shallow renders without crashing', async () => {
    shallow(<TasksPanel />)
  })

  it('should add a task', async () => {
    const addTask = td.func()
    const tasks = []
    const subject = shallow(<TasksPanel tasks={tasks} addTask={addTask} />)

    subject.find(TasksFormContainer).simulate('add', { id: 'new-task' })

    td.verify(addTask({ id: 'new-task' }))
  })

  it('should toggle task completion', async () => {
    const updateTask = td.func()
    const tasks = [{ id: 'the-task' }]
    const subject = shallow(
      <TasksPanel tasks={tasks} updateTask={updateTask} />
    )

    subject.find(TasksList).simulate('toggle', 'the-task')

    td.verify(updateTask({ id: 'the-task', complete: true }))
  })
})
