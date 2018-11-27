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
    const api = td.object(['addTask'])
    const subject = shallow(<TaskFormContainer onAdd={handleAdd} api={api} />)

    td.when(api.addTask('task')).thenResolve({
      data: 'data'
    })

    subject.find(TaskForm).simulate('submit', 'task')

    return new Promise(resolve => setTimeout(resolve, 0)).then(() =>
      td.verify(handleAdd('data'))
    )
  })
})
