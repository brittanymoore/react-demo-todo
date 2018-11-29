import React from 'react'
import { shallow } from 'enzyme'
import { TaskListContainer } from './index'
import { TaskList } from './List/List'
import { TaskFormContainer } from '../Form'

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}

describe('TaskListContainer', () => {
  it('shallow renders without crashing', async () => {
    const api = td.object(['getTasks'])
    td.when(api.getTasks()).thenResolve({ data: [] })

    await flushPromises()

    shallow(<TaskListContainer api={api} />)
  })

  it('should get tasks', async () => {
    const api = td.object(['getTasks'])
    const tasks = [{ id: 'the-task' }]
    td.when(api.getTasks()).thenResolve({ data: tasks })

    const subject = shallow(<TaskListContainer api={api} />)
    await flushPromises()

    expect(subject.find(TaskList).props().tasks).toEqual(tasks)
  })

  it('should add a task', async () => {
    const api = td.object(['getTasks', 'addTask'])
    const tasks = []

    td.when(api.getTasks()).thenResolve({ data: tasks })

    const subject = shallow(<TaskListContainer api={api} />)
    await flushPromises()
    subject.find(TaskFormContainer).simulate('add', { id: 'new-task' })
    await flushPromises()

    expect(subject.find(TaskList).props().tasks).toEqual([{ id: 'new-task' }])
  })

  it('should toggle task completion', async () => {
    const api = td.object(['getTasks', 'updateTask'])
    const tasks = [{ id: 'the-task' }]

    td.when(api.getTasks()).thenResolve({ data: tasks })
    td.when(
      api.updateTask('the-task', { id: 'the-task', complete: true })
    ).thenResolve({})

    const subject = shallow(<TaskListContainer api={api} />)
    await flushPromises()

    subject.find(TaskList).simulate('toggle', 'the-task')
    await flushPromises()

    expect(subject.find(TaskList).props().tasks).toEqual([
      {
        id: 'the-task',
        complete: true
      }
    ])
  })
})
