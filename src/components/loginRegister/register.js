import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { registerSuccess } from '../../actions';

class Register extends React.Component {
	state = {
		registerCred: {
			username: '',
			firstname: '',
			lastname: '',
			password: ''
		}
	};

	handleChange = (e) => {
		this.setState({
			registerCred: {
				...this.state.registerCred,
				[e.target.name]: e.target.value
			}
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.registerSuccess(this.state.registerCred).then(() => {
			this.props.history.push('/protected');
		});
	};
	render() {
		return (
			<div>
				<h1>Register</h1>
				<form action="" onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="username"
						name="username"
						onChange={this.handleChange}
						value={this.state.registerCred.username}
					/>
					<input
						type="text"
						placeholder="firstname"
						name="firstname"
						onChange={this.handleChange}
						value={this.state.registerCred.firstname}
					/>
					<input
						type="text"
						placeholder="lastname"
						name="lastname"
						onChange={this.handleChange}
						value={this.state.registerCred.lastname}
					/>
					<input
						type="password"
						placeholder="password"
						name="password"
						onChange={this.handleChange}
						value={this.state.registerCred.password}
					/>
					<button>Register</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('MSTP', state);
	return {
		loggingIn: state.loggingIn,
		error: state.error
	};
};

export default connect(mapStateToProps, { registerSuccess })(Register);