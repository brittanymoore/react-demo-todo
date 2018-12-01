import React from 'react'
import { shallow } from 'enzyme'
import { TasksForm } from '.'
import { Input } from '../../UI/Input'

describe('TasksForm', () => {
  it('shallow renders without crashing', () => {
    shallow(<TasksForm />)
  })

  it('should wire up form submit handler', () => {
    const handleSubmit = td.func()
    const subject = shallow(<TasksForm onSubmit={handleSubmit} />)

    subject.find('form').simulate('submit', {
      preventDefault: td.func()
    })

    td.verify(handleSubmit())
  })

  it('should wire up change handler', () => {
    const handleChange = td.func()
    const subject = shallow(<TasksForm onChange={handleChange} />)

    subject.find(Input).simulate('change', 'name', 'string')

    td.verify(handleChange('name', 'string'))
  })

  it('should disable button when form is invalid', () => {
    const subject = shallow(<TasksForm isValid={false} />)

    expect(subject.find('button').props().disabled).toBe(true)
  })

  it('should enable button when form is valid', () => {
    const subject = shallow(<TasksForm isValid />)

    expect(subject.find('button').props().disabled).toBe(false)
  })
})
