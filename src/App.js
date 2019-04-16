import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from 'react-router-dom';
// import Footer from './components/footer';
import BookPage from './components/bookpage';
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
		console.log('APP', this.props);
		return (
			<div className="App">
				<div className="NavLinks">
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/register">Register</NavLink>
					<NavLink to="/">Home</NavLink>
					<button className={this.props.loggingIn ? 'loginOutBtn' : 'displayNone'} onClick={this.logOut}>
						Log out
					</button>
				</div>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<PrivateRoute exact path="/protected" component={BookList} />
				<PrivateRoute path="/protected/:id" component={BookPage} />
			</div>
		);
	}
}
const mapStateToProps = ({ loggingIn }) => ({
	loggingIn
});
export default withRouter(connect(mapStateToProps, {})(App));
