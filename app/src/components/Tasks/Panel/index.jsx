import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/tasks'

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

    this.state = {
      tasks: props.tasks
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      tasks: nextProps.tasks
    })
  }

  handleToggle(id) {
    const tasks = this.state.tasks
    const task = tasks.find(task => task.id === id)
    task.complete = !task.complete

    this.props.updateTask(task)
  }

  render() {
    const { tasks } = this.state
    const { addTask } = this.props

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

export { TasksPanel }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPanel)
