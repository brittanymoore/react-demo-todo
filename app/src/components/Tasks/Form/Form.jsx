import React from 'react'
import PropTypes from 'prop-types'

import { Input } from '../../UI/Input/Input'

import styles from './Form.css'

export class TasksForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    const { name } = this.state

    return (
      <form
        noValidate
        onSubmit={this.handleSubmit}
        className={styles['task-form']}
        data-test="task-form"
      >
        <Input
          name="name"
          id="taskName"
          value={name}
          onChange={this.handleChange}
        >
          Add a Task
        </Input>
        <button
          type="submit"
          className={styles['add-button']}
          disabled={!(name && name.length > 0)}
        >
          Add
        </button>
      </form>
    )
  }
}
