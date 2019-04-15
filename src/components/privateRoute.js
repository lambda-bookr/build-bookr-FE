import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

axios.interceptors.request.use((requestConfig) => {
	const token = localStorage.getItem('token');
	requestConfig.headers.authorization = token;
	return requestConfig;
});

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (localStorage.getItem('token')) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};

export default connect(null, {})(PrivateRoute);
