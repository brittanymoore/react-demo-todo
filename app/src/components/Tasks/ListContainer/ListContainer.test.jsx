import React from 'react'
import { shallow } from 'enzyme'
import { TasksListContainer } from '.'
import { TasksList } from '../List'
import { TasksFormContainer } from '../FormContainer'

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}

describe('TasksListContainer', () => {
  it('shallow renders without crashing', async () => {
    const api = td.object(['getTasks'])
    td.when(api.getTasks()).thenResolve({ data: [] })

    await flushPromises()

    shallow(<TasksListContainer api={api} />)
  })

  it('should get tasks', async () => {
    const api = td.object(['getTasks'])
    const tasks = [{ id: 'the-task' }]
    td.when(api.getTasks()).thenResolve({ data: tasks })

    const subject = shallow(<TasksListContainer api={api} />)
    await flushPromises()

    expect(subject.find(TasksList).props().tasks).toEqual(tasks)
  })

  it('should add a task', async () => {
    const api = td.object(['getTasks', 'addTask'])
    const tasks = []

    td.when(api.getTasks()).thenResolve({ data: tasks })

    const subject = shallow(<TasksListContainer api={api} />)
    await flushPromises()

    td.when(api.addTask({ id: 'new-task' })).thenResolve({
      data: { id: 'added-task' }
    })

    subject.find(TasksFormContainer).simulate('add', { id: 'new-task' })
    await flushPromises()

    expect(subject.find(TasksList).props().tasks).toEqual([
      { id: 'added-task' }
    ])
  })

  it('should toggle task completion', async () => {
    const api = td.object(['getTasks', 'updateTask'])
    const tasks = [{ id: 'the-task' }]

    td.when(api.getTasks()).thenResolve({ data: tasks })
    td.when(
      api.updateTask('the-task', { id: 'the-task', complete: true })
    ).thenResolve({})

    const subject = shallow(<TasksListContainer api={api} />)
    await flushPromises()

    subject.find(TasksList).simulate('toggle', 'the-task')
    await flushPromises()

    expect(subject.find(TasksList).props().tasks).toEqual([
      {
        id: 'the-task',
        complete: true
      }
    ])
  })
})
