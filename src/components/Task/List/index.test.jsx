import React from 'react' // eslint-disable-line no-unused-vars
import { shallow } from 'enzyme'
import td from 'testdouble'
import { TaskListContainer } from './index'
import { TaskList } from './List/List'
import { TaskFormContainer } from '../Form'

function flushPromises () {
  return new Promise(resolve => setImmediate(resolve))
}

describe('TaskListContainer', () => {
  afterEach(() => {
    td.reset()
  })

  it('shallow renders without crashing', async () => {
    const client = td.object(['get'])
    const apiUrl = '/api'
    td.when(client.get('/api/tasks')).thenResolve({ data: [] })

    await flushPromises()

    shallow(<TaskListContainer client={client} apiUrl={apiUrl} />)
  })

  it('should get tasks', async () => {
    const client = td.object(['get'])
    const apiUrl = '/api'
    const tasks = [{ id: 'the-task' }]

    td.when(client.get('/api/tasks')).thenResolve({ data: tasks })

    const subject = shallow(
      <TaskListContainer client={client} apiUrl={apiUrl} />
    )

    await flushPromises()
    expect(subject.find(TaskList).props().tasks).toEqual(tasks)
  })

  it('should add a task', async () => {
    const client = td.object(['get', 'put'])
    const apiUrl = '/api'
    const tasks = []

    td.when(client.get('/api/tasks')).thenResolve({ data: tasks })

    const subject = shallow(
      <TaskListContainer client={client} apiUrl={apiUrl} />
    )

    await flushPromises()
    subject.find(TaskFormContainer).simulate('add', {
      id: 'the-new-task'
    })

    await flushPromises()
    expect(subject.find(TaskList).props().tasks).toEqual([
      {
        id: 'the-new-task'
      }
    ])
  })

  it('should toggle task completion', async () => {
    const client = td.object(['get', 'put'])
    const apiUrl = '/api'
    const tasks = [{ id: 'the-task' }]

    td.when(client.get('/api/tasks')).thenResolve({ data: tasks })
    td
      .when(
        client.put('/api/tasks/the-task', { id: 'the-task', complete: true })
      )
      .thenResolve({})

    const subject = shallow(
      <TaskListContainer client={client} apiUrl={apiUrl} />
    )

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
