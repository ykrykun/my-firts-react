import React from 'react'

export default class Ccomp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value
		})
	}
	render() {
		return (
			<div>
			<input onChange = {this.handleChange}></input>
			<h5>Controlled input: </h5>
			<h1>{this.state.input}</h1>
			</div>
		)
	}
}