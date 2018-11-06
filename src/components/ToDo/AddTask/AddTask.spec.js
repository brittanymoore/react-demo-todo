import React from 'react'
import { AddTask } from './AddTask'
import renderer from 'react-test-renderer'

test('Create component', () => {
  const onAdd = () => {}
  const component = renderer.create(<AddTask onAdd={onAdd} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
