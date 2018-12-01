import React from 'react'
import PropTypes from 'prop-types'

import { TasksForm } from '../Form'

export class TasksFormContainer extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(task) {
    this.props.onAdd(task)
  }

  render() {
    return <TasksForm onSubmit={this.handleSubmit} />
  }
}
