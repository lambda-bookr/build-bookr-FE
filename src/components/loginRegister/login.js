import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { loginSuccess } from '../../actions';

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: ''
		}
	};

	handleChange = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	handleLogin = (e) => {
		e.preventDefault();
		//PROMISe when it resoved push the history back
		this.props.loginSuccess(this.state.credentials).then(() => {
			this.props.history.push('/protected');
		});
	};

	render() {
		return (
			<div className="loginPage">
				<form onSubmit={this.handleLogin}>
					<input
						type="text"
						placeholder="username"
						name="username"
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						placeholder="password"
						name="password"
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Login</button>
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

export default connect(mapStateToProps, { loginSuccess })(Login);
