import React from 'react'
import PropTypes from 'prop-types'

import styles from './Panel.css'

import { TasksList } from '../List'
import { TasksFormContainer } from '../FormContainer'

const TasksPanel = ({ tasks, onToggle, onAdd }) => (
  <div data-test="task-list" className={styles.panel}>
    <TasksList name="My List" tasks={tasks} onToggle={onToggle} />
    <TasksFormContainer onAdd={onAdd} />
  </div>
)

TasksPanel.propTypes = {
  tasks: PropTypes.array,
  onToggle: PropTypes.func,
  onAdd: PropTypes.func
}

export { TasksPanel }
