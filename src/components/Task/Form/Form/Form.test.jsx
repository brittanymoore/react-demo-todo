import React from 'react'
import { shallow } from 'enzyme'
import { TaskForm } from './Form'
import { Input } from '../../../UI/Input/Input'

describe('TaskForm', () => {
  it('shallow renders without crashing', () => {
    shallow(<TaskForm />)
  })

  it('should wire up form submit handler', () => {
    const handleSubmit = td.func()
    const subject = shallow(<TaskForm onSubmit={handleSubmit} />)

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
    const subject = shallow(<TaskForm />)

    subject.find(Input).simulate('change', 'name', 'string')

    expect(subject.find(Input).props().value).toBe('string')
  })

  it('should disable button when name is empty', () => {
    const subject = shallow(<TaskForm />)

    expect(subject.find('button').props().disabled).toBe(true)
  })

  it('should enable button when name is non-empty', () => {
    const subject = shallow(<TaskForm />)

    subject.find(Input).simulate('change', 'name', 'string')

    expect(subject.find('button').props().disabled).toBe(false)
  })
})
