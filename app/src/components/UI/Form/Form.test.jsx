import React from 'react'
import { shallow } from 'enzyme'
import { Form } from '.'

describe('Form', () => {
  it('shallow renders without crashing', () => {
    shallow(<Form />)
  })

  it('should wire up submit handler', () => {
    const handleSubmit = td.func()
    const subject = shallow(<Form onSubmit={handleSubmit} />)

    subject.find('form').simulate('submit', {
      preventDefault: td.func()
    })

    td.verify(handleSubmit())
  })

  it('should handle class props', () => {
    const subject = shallow(<Form className="my-class" />)

    expect(subject.find('form').hasClass('my-class')).toBe(true)
  })
})
