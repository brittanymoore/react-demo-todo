import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../state/actions/tasks'

import styles from './Panel.css'

import { TasksList } from '../List'
import { TasksFormContainer } from '../Form'

class TasksPanel extends React.Component {
  static propTypes = {
    tasks: PropTypes.array,
    updateTask: PropTypes.func,
    addTask: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(id) {
    const tasks = this.props.tasks
    const task = tasks.find(task => task.id === id)

    if (task) {
      const updatedTask = Object.assign({}, task)
      updatedTask.complete = !updatedTask.complete
      this.props.updateTask(updatedTask)
    }
  }

  render() {
    const { addTask, tasks } = this.props

    return (
      <div data-test="task-list" className={styles.panel}>
        <TasksList name="My List" tasks={tasks} onToggle={this.handleToggle} />
        <TasksFormContainer onAdd={addTask} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => {
      return dispatch(actions.addTask(task))
    },
    updateTask: task => {
      return dispatch(actions.updateTask(task))
    }
  }
}

const withHandlers = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPanel)
export { withHandlers as TasksPanel }
