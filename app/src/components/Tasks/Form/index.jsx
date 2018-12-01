import React from 'react'
import PropTypes from 'prop-types'

import { Input } from '../../UI/Input'

import styles from './Form.css'

export class TasksForm extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    isValid: PropTypes.bool,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  }

  render() {
    const { name, isValid, onChange } = this.props

    return (
      <form
        noValidate
        onSubmit={this.handleSubmit}
        className={styles['task-form']}
        data-test="task-form"
      >
        <Input name="name" id="taskName" value={name} onChange={onChange}>
          Add a Task
        </Input>
        <button
          type="submit"
          className={styles['add-button']}
          disabled={!isValid}
        >
          Add
        </button>
      </form>
    )
  }
}
