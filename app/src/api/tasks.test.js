import { TasksApi } from './tasks'

describe('TasksApi', () => {
  it('should add a task', () => {
    const client = td.object(['post'])
    const apiUrl = '/api'
    const subject = new TasksApi({ client, apiUrl })

    td.when(client.post('/api/tasks', 'task')).thenResolve({ data: 'added' })

    return subject.addTask('task').then(res => expect(res).toBe('added'))
  })

  it('should update a task', () => {
    const client = td.object(['put'])
    const apiUrl = '/api'
    const subject = new TasksApi({ client, apiUrl })

    td.when(client.put('/api/tasks/the-task', { id: 'the-task' })).thenResolve({
      data: 'updated'
    })

    return subject
      .updateTask({ id: 'the-task' })
      .then(res => expect(res).toBe('updated'))
  })

  it('should get tasks', () => {
    const client = td.object(['get'])
    const apiUrl = '/api'
    const subject = new TasksApi({ client, apiUrl })

    td.when(client.get('/api/tasks')).thenResolve({ data: 'tasks' })

    return subject.getTasks().then(res => expect(res).toBe('tasks'))
  })
})
