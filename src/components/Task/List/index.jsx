import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { TaskList } from './List/List'
import { TaskFormContainer } from './../Form'

export class TaskListContainer extends React.Component {
  static propTypes = {
    client: PropTypes.any,
    apiUrl: PropTypes.string
  }

  static defaultProps = {
    client: axios,
    apiUrl: process.env.API_URL
  }

  constructor (props) {
    super(props)

    this.state = {
      tasks: []
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount () {
    const { client, apiUrl } = this.props
    client.get(`${apiUrl}/tasks`).then(res => {
      const tasks = res.data
      this.setState({ tasks })
    })
  }

  handleAdd (task) {
    const tasks = this.state.tasks
    tasks.push(task)
    this.setState({ tasks })
  }

  handleToggle (id) {
    const { client, apiUrl } = this.props
    const tasks = this.state.tasks
    const task = tasks.find(task => task.id === id)
    task.complete = !task.complete

    client.put(`${apiUrl}/tasks/${id}`, task).then(() => {
      this.setState({ tasks })
    })
  }

  render () {
    const { tasks } = this.state

    return (
      <div data-test="task-list">
        <TaskList name="My List" tasks={tasks} onToggle={this.handleToggle} />
        <TaskFormContainer onAdd={this.handleAdd} />
      </div>
    )
  }
}
