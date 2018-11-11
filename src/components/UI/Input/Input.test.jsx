import React from 'react'
import { shallow } from 'enzyme'
import td from 'testdouble'
import { Input } from './Input'

describe('Input', () => {
  it('shallow renders without crashing', () => {
    shallow(<Input />)
  })

  it('should handle input changes', () => {
    const handleChange = td.func()
    const subject = shallow(<Input onChange={handleChange} />)

    subject.find('input').simulate('change', {
      target: {
        name: 'name',
        value: 'value'
      }
    })

    td.verify(handleChange('name', 'value'))
  })
})
