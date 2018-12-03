import React from 'react'
import PropTypes from 'prop-types'

import { TasksFormView } from './View'

export class TasksFormContainer extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(property, value) {
    this.setState({
      [property]: value
    })
  }

  handleSubmit() {
    this.props.onAdd(this.state)
  }

  render() {
    const { name } = this.state

    return (
      <TasksFormView
        name={name}
        isValid={!!name}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}
