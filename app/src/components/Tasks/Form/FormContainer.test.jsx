import React from 'react'
import { shallow } from 'enzyme'
import { TasksFormContainer } from '.'
import { TasksFormView } from './View'

describe('TaskFormContainer', () => {
  it('shallow renders without crashing', () => {
    shallow(<TasksFormContainer />)
  })

  it('should wire up add handler', () => {
    const handleAdd = td.func()
    const subject = shallow(<TasksFormContainer onAdd={handleAdd} />)

    subject.find(TasksFormView).simulate('change', 'name', 'string')
    subject.find(TasksFormView).simulate('submit')

    return new Promise(resolve => setTimeout(resolve, 0)).then(() =>
      td.verify(handleAdd({ name: 'string' }))
    )
  })

  it('should update name on change', () => {
    const subject = shallow(<TasksFormContainer />)

    subject.find(TasksFormView).simulate('change', 'name', 'string')

    expect(subject.find(TasksFormView).props().name).toBe('string')
  })

  it('should consider the form invalid if no name is provided', () => {
    const subject = shallow(<TasksFormContainer />)

    expect(subject.find(TasksFormView).props().isValid).toBe(false)
  })

  it('should consider the form valid if a name is provided', () => {
    const subject = shallow(<TasksFormContainer />)

    subject.find(TasksFormView).simulate('change', 'name', 'string')

    expect(subject.find(TasksFormView).props().isValid).toBe(true)
  })
})
