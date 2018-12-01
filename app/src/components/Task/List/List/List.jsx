import React from 'react'
import PropTypes from 'prop-types'

import { TaskListItem } from '../../ListItem/ListItem'

import styles from './List.css'

const TaskList = ({ name, tasks, onToggle }) => (
  <div className={styles['todo-list-container']}>
    <h2>{name}</h2>

    <ul className={styles['todo-list']}>
      {tasks.map(task => (
        <TaskListItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  </div>
)

TaskList.propTypes = {
  name: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func
}

TaskList.defaultProps = {
  tasks: []
}

export { TaskList }
