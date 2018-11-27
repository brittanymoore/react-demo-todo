import React from 'react'
import PropTypes from 'prop-types'

import styles from './Task.css'

export class Task extends React.Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    onToggle: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
    this.handleKeyup = this.handleKeyup.bind(this)
  }

  handleToggle () {
    this.props.onToggle(this.props.task.id)
  }

  handleKeyup (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      this.handleToggle()
    }
  }

  render () {
    const { task } = this.props
    return (
      <li className={task.complete ? styles['complete'] : ''}>
        {task.name}
        <div className={styles['task-complete']}>
          <span
            onClick={this.handleToggle}
            role='button'
            tabIndex={0}
            onKeyUp={this.handleKeyup}
            className={`${styles.icon} material-icons`}
          >
            check_circle
          </span>
        </div>
      </li>
    )
  }
}
