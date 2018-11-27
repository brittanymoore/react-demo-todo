import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.css'

export class Input extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    this.props.onChange(target.name, target.value)
  }

  render() {
    const { name, id, value, children } = this.props
    return (
      <label htmlFor={id}>
        <span className={styles['label-text']}>{children}</span>
        <input
          type="text"
          name={name}
          id={id}
          value={value}
          onChange={this.handleChange}
        />
      </label>
    )
  }
}
