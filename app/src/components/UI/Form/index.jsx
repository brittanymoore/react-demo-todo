import React from 'react'
import PropTypes from 'prop-types'

export default class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
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
    const { children, className } = this.props
    return (
      <form noValidate className={className} onSubmit={this.handleSubmit}>
        {children}
      </form>
    )
  }
}
