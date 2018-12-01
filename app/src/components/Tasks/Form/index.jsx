import React from 'react'
import PropTypes from 'prop-types'

import { Form } from '../../UI/Form'
import { Input } from '../../UI/Input'

import styles from './Form.css'

const TasksForm = ({ name, isValid, onChange, onSubmit }) => (
  <Form onSubmit={onSubmit} className={styles['task-form']}>
    <Input name="name" id="taskName" value={name} onChange={onChange}>
      Add a Task
    </Input>
    <button type="submit" className={styles['add-button']} disabled={!isValid}>
      Add
    </button>
  </Form>
)

TasksForm.propTypes = {
  name: PropTypes.string,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export { TasksForm }
