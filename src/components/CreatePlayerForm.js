import React, { PureComponent } from 'react'

class CreatePlayerForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>

				<h1>Please Create Player</h1>

				<div>
					<label htmlFor="username">Username:</label>
					<input name="username" id="username" value={
						this.state.username || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="image">Photo URL:</label>
					<input name="image" id="image" value={
						this.state.image || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="location">Location:</label>
					<input name="location" id="location" value={
						this.state.location || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Create Player</button>
			</form>
		)
	}
}

export default CreatePlayerForm
