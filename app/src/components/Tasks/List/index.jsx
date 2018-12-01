import React from 'react'
import PropTypes from 'prop-types'

import { TasksListItem } from '../ListItem'

import styles from './List.css'

const TasksList = ({ name, tasks, onToggle }) => (
  <div className={styles['todo-list-container']}>
    <h2>{name}</h2>

    <ul className={styles['todo-list']}>
      {tasks.map(task => (
        <TasksListItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  </div>
)

TasksList.propTypes = {
  name: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func
}

TasksList.defaultProps = {
  tasks: []
}

export { TasksList }
