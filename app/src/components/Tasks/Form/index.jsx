import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../state/actions/tasks'

import { TasksFormView } from './View'

class TasksFormContainer extends React.Component {
  static propTypes = {
    addTask: PropTypes.func
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
    this.props.addTask(this.state)
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

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: task => {
      return dispatch(actions.addTask(task))
    }
  }
}

const withHandlers = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksFormContainer)
export { withHandlers as TasksFormContainer }
