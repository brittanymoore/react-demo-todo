import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { TaskForm } from './Form/Form'

export class TaskFormContainer extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func,
    client: PropTypes.any,
    apiUrl: PropTypes.string
  }

  static defaultProps = {
    client: axios,
    apiUrl: process.env.API_URL
  }

  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (task) {
    this.props.client
      .post(`${this.props.apiUrl}/tasks`, task)
      .then(res => this.props.onAdd(res.data))
  }

  render () {
    return <TaskForm onSubmit={this.handleSubmit} />
  }
}
