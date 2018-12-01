import React from 'react'
import { shallow } from 'enzyme'
import { TasksForm } from './Form'
import { Input } from '../../../UI/Input/Input'

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

    td.verify(
      handleSubmit({
        name: ''
      })
    )
  })

  it('should update name on change', () => {
    const subject = shallow(<TasksForm />)

    subject.find(Input).simulate('change', 'name', 'string')

    expect(subject.find(Input).props().value).toBe('string')
  })

  it('should disable button when name is empty', () => {
    const subject = shallow(<TasksForm />)

    expect(subject.find('button').props().disabled).toBe(true)
  })

  it('should enable button when name is non-empty', () => {
    const subject = shallow(<TasksForm />)

    subject.find(Input).simulate('change', 'name', 'string')

    expect(subject.find('button').props().disabled).toBe(false)
  })
})
