import React from 'react'

import styles from './Panel.css'

import { TasksListContainer } from '../List'
import { TasksFormContainer } from '../Form'

export const TasksPanel = () => (
  <div className={styles.panel}>
    <TasksListContainer />
    <TasksFormContainer />
  </div>
)
