import React from 'react'
import PropTypes from 'prop-types'
import { TasksApi } from '../../../api/tasks'

import styles from './Panel.css'

import { TasksList } from '../List'
import { TasksFormContainer } from '../Form'

export class TasksPanel extends React.Component {
  static propTypes = {
    api: PropTypes.any
  }

  static defaultProps = {
    api: new TasksApi()
  }

  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    this.props.api.getTasks().then(res => {
      const tasks = res.data
      this.setState({ tasks })
    })
  }

  handleAdd(task) {
    this.props.api.addTask(task).then(res => {
      const tasks = this.state.tasks
      tasks.push(res.data)
      this.setState({ tasks })
    })
  }

  handleToggle(id) {
    const tasks = this.state.tasks
    const task = tasks.find(task => task.id === id)
    task.complete = !task.complete

    this.props.api.updateTask(task.id, task).then(() => {
      this.setState({ tasks })
    })
  }

  render() {
    const { tasks } = this.state

    return (
      <div data-test="task-list" className={styles.panel}>
        <TasksList name="My List" tasks={tasks} onToggle={this.handleToggle} />
        <TasksFormContainer onAdd={this.handleAdd} />
      </div>
    )
  }
}
