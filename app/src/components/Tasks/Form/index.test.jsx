import React from 'react'
import { shallow } from 'enzyme'
import { TasksFormContainer } from './index'
import { TasksForm } from './Form/Form'

describe('TaskFormContainer', () => {
  it('shallow renders without crashing', () => {
    shallow(<TasksFormContainer />)
  })

  it('should wire up add handler', () => {
    const handleAdd = td.func()
    const api = td.object(['addTask'])
    const subject = shallow(<TasksFormContainer onAdd={handleAdd} api={api} />)

    td.when(api.addTask('task')).thenResolve({
      data: 'data'
    })

    subject.find(TasksForm).simulate('submit', 'task')

    return new Promise(resolve => setTimeout(resolve, 0)).then(() =>
      td.verify(handleAdd('data'))
    )
  })
})
