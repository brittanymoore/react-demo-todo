import React from 'react'
import { shallow } from 'enzyme'
import { TaskFormContainer } from './index'
import { TaskForm } from './Form/Form'

describe('TaskFormContainer', () => {
  it('shallow renders without crashing', () => {
    shallow(<TaskFormContainer />)
  })

  it('should wire up add handler', () => {
    const handleAdd = td.func()
    const client = td.object(['post'])
    const subject = shallow(
      <TaskFormContainer onAdd={handleAdd} client={client} apiUrl="/api" />
    )

    td.when(client.post('/api/tasks', 'task')).thenResolve({
      data: 'data'
    })

    subject.find(TaskForm).simulate('submit', 'task')

    return new Promise(resolve => setTimeout(resolve, 0)).then(() =>
      td.verify(handleAdd('data'))
    )
  })
})
