import React from 'react'
import { shallow } from 'enzyme'
import td from 'testdouble'
import { Task } from './Task'

describe('Task', () => {
  it('shallow renders without crashing', () => {
    shallow(<Task task={{}} />)
  })

  it('should add class if complete', () => {
    const task = {
      id: 'the-task',
      complete: true
    }
    const subject = shallow(<Task task={task} />)

    expect(subject.find('li').hasClass('complete')).toBe(true)
  })

  it('should not add class if not complete', () => {
    const task = {
      id: 'the-task',
      complete: false
    }
    const subject = shallow(<Task task={task} />)

    expect(subject.find('li').hasClass('complete')).toBe(false)
  })

  it('should wire up toggle handler', () => {
    const handleToggle = td.func()
    const task = {
      id: 'the-task'
    }
    const subject = shallow(<Task task={task} onToggle={handleToggle} />)

    subject.find('span').simulate('click')

    td.verify(handleToggle('the-task'))
  })

  it('should wire up toggle handler (keyup Enter)', () => {
    const handleToggle = td.func()
    const task = {
      id: 'the-task'
    }
    const subject = shallow(<Task task={task} onToggle={handleToggle} />)

    subject.find('span').simulate('keyup', {
      preventDefault: td.func(),
      key: 'Enter'
    })

    td.verify(handleToggle('the-task'))
  })

  it('should wire up toggle handler (keyup Spacebar)', () => {
    const handleToggle = td.func()
    const task = {
      id: 'the-task'
    }
    const subject = shallow(<Task task={task} onToggle={handleToggle} />)

    subject.find('span').simulate('keyup', {
      preventDefault: td.func(),
      key: ' '
    })

    td.verify(handleToggle('the-task'))
  })
})
