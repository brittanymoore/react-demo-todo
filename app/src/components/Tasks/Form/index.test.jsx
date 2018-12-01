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
    const subject = shallow(<TasksFormContainer onAdd={handleAdd} />)

    subject.find(TasksForm).simulate('submit', 'task')

    return new Promise(resolve => setTimeout(resolve, 0)).then(() =>
      td.verify(handleAdd('task'))
    )
  })
})
