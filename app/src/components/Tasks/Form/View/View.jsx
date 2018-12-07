import React from 'react'
import { shallow } from 'enzyme'
import { TasksFormView } from '.'
import { Form } from '../../../UI/Form'
import { Input } from '../../../UI/Input'

describe('TasksFormView', () => {
  it('shallow renders without crashing', () => {
    shallow(<TasksFormView />)
  })

  it('should wire up form submit handler', () => {
    const handleSubmit = td.func()
    const subject = shallow(<TasksFormView onSubmit={handleSubmit} />)

    subject.find(Form).simulate('submit')

    td.verify(handleSubmit())
  })

  it('should wire up change handler', () => {
    const handleChange = td.func()
    const subject = shallow(<TasksFormView onChange={handleChange} />)

    subject.find(Input).simulate('change', 'name', 'string')

    td.verify(handleChange('name', 'string'))
  })

  it('should disable button when form is invalid', () => {
    const subject = shallow(<TasksFormView isValid={false} />)

    expect(subject.find('button').props().disabled).toBe(true)
  })

  it('should enable button when form is valid', () => {
    const subject = shallow(<TasksFormView isValid />)

    expect(subject.find('button').props().disabled).toBe(false)
  })
})
