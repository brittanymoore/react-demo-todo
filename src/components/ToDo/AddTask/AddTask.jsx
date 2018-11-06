import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
		this.API_URL = process.env.API_URL;

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleFormSubmit(event) {
		event.preventDefault();
		axios.post(`${this.API_URL}/tasks`, this.state)
			.then((res) => {
				this.props.onAdd(res.data);
				this.setState({ name: '' });
			});
	}

	render() {

		const { name } = this.state;
		const canSubmit = name && name.length > 0;

		return (
			<form noValidate onSubmit={this.handleFormSubmit}>
				<label htmlFor="taskName">
					Add a task:
          <input type="text" name="name" id="taskName" value={this.state.name} onChange={this.handleInputChange} />
				</label>
				<button type="submit" disabled={!canSubmit}>Add</button>
			</form>
		);
	}
}

AddTask.propTypes = {
	onAdd: PropTypes.func
}
