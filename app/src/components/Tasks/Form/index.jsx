import React from 'react'
import PropTypes from 'prop-types'
import { TasksApi } from '../../../api/tasks'

import { TasksForm } from './Form/Form'

export class TasksFormContainer extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func,
    api: PropTypes.any
  }

  static defaultProps = {
    api: new TasksApi()
  }

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(task) {
    this.props.api.addTask(task).then(res => this.props.onAdd(res.data))
  }

  render() {
    return <TasksForm onSubmit={this.handleSubmit} />
  }
}
