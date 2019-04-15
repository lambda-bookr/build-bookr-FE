import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
// import Footer from './components/footer';
import Register from './components/loginRegister/register';
import BookList from './components/bookList';
import PrivateRoute from './components/privateRoute';
import Login from './components/loginRegister/login';

class App extends Component {
	logOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		this.props.history.push('/login');
	};

	render() {
		return (
			<div className="App">
				<div className="NavLinks">
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/register">Register</NavLink>
					<NavLink to="/">Home</NavLink>
					<button onClick={this.logOut}>Log out</button>
				</div>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<PrivateRoute exact path="/protected" component={BookList} />
			</div>
		);
	}
}

export default withRouter(App);
