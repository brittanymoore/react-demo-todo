import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../state/actions/tasks'

import TasksListView from './View'

class TasksListContainer extends React.Component {
  static propTypes = {
    tasks: PropTypes.array,
    updateTask: PropTypes.func
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
    return (
      <TasksListView
        name="My List"
        tasks={this.props.tasks}
        onToggle={this.handleToggle}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTask: task => {
      return dispatch(actions.updateTask(task))
    }
  }
}

const withHandlers = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksListContainer)
export default withHandlers
