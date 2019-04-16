// ACTIONS

import axios from 'axios';
import axiosWithAuth from '../auth/axiosAuth';

export const FETCH_BOOKS_START = 'FETCH_BOOKS_START';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FETCHING = 'LOGIN_FETCHING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const ADD_REVIEW = 'ADD_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FETCHING = 'REGISTER_FETCHING';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const FETCH_BOOK_START = 'FETCH_BOOK_START';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';

export const loginSuccess = (cred) => (dispatch) => {
	dispatch({ type: LOGIN_FETCHING });

	return axios
		.post('https://bookr-backend.herokuapp.com/api/auth/login', cred)
		.then((res) => {
			console.log('LOGIN RES IS ', res);
			localStorage.setItem('token', res.data.token);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data.token
			});
		})
		.catch((err) => {
			console.log(err);
			dispatch({
				type: LOGIN_FAILURE,
				payload: err.message
			});
		});
};

export const registerSuccess = (cred) => (dispatch) => {
	dispatch({ type: REGISTER_FETCHING });

	return axios
		.post('https://bookr-backend.herokuapp.com/api/auth/register', cred)
		.then((res) => {
			console.log('RES DATA LOGIN RESPONSE:', res);
			localStorage.setItem('token', res.data.token);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data.token
			});
		})
		.catch((err) => {
			dispatch({
				type: REGISTER_FAILURE,
				payload: err.message
			});
		});
};

export const getBooks = () => (dispatch) => {
	dispatch({ type: FETCH_BOOKS_START });
	axios
		.get('https://bookr-backend.herokuapp.com/api/books/')
		.then((res) => {
			console.log('RES DATA LOGIN RESPONSE:', res);
			dispatch({
				type: FETCH_BOOKS_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: FETCH_BOOKS_FAILURE,
				payload: err.message
			});
		});
};

export const getBookPage = (id) => (dispatch) => {
	dispatch({ type: FETCH_BOOK_START });
	axios
		.get(`https://bookr-backend.herokuapp.com/api/books/${id}`)
		.then((res) => {
			console.log('RES DATA LOGIN RESPONSE:', res);
			dispatch({
				type: FETCH_BOOK_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: FETCH_BOOK_FAILURE,
				payload: err.message
			});
		});
};
