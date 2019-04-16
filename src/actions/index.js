// ACTION EXPORTS

import axios from 'axios';

//fetch books
export const FETCH_BOOKS_START = 'FETCH_BOOKS_START';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
//login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FETCHING = 'LOGIN_FETCHING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
//add book
export const ADD_BOOK_START = 'ADD_BOOK_START';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const ADD_BOOK_FAILURE = 'ADD_BOOK_FAILURE';
//delete book
export const DELETE_BOOK_START = 'DELETE_BOOK_START';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';
//add review
export const ADD_REVIEW_START = 'ADD_REVIEW_START';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';
//fetch review
export const FETCH_REVIEWS_START = 'FETCH_REVIEWS_START';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';
//delete review
export const DELETE_REVIEW_START = 'DELETE_REVIEWS_START'
export const DELETE_REVIEW_SUCCESSFUL = 'DELETE_REVIEWS_SUCCESSFUL'
export const DELETE_REVIEW_FAILURE = 'DELETE_REVIEWS_FAILURE'
//update review
export const UPDATE_REVIEW_START = 'UPDATE_REVIEW_START';
export const UPDATE_REVIEW_SUCCESS = 'UPDATE_REVIEW_SUCCESS';
export const UPDATE_REVIEW_FAILURE = 'UPDATE_REVIEW_START_FAILURE';
//regist
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FETCHING = 'REGISTER_FETCHING';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
//fetch book
export const FETCH_BOOK_START = 'FETCH_BOOK_START';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';

//ACTION METHODS

//Login/Registration actions
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
//Book Actions
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
export const deleteBook = (id) => (dispatch) => {
	dispatch({ type: DELETE_BOOK_START });
	axios
		.get(`https://bookr-backend.herokuapp.com/api/books/${id}`)
		.then((res) => {
			console.log('DELETE REVIEW LOG',res);
			dispatch({
				type: DELETE_BOOK_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: DELETE_BOOK_FAILURE,
				payload: err.message
			});
		});
};

//SERVER DOWN TEST IN MORNING
//review Actions
export const getReviews = () => (dispatch) => {
	dispatch({ type: FETCH_REVIEWS_START });
	axios
		.get('https://bookr-backend.herokuapp.com/api/books/id/reviews')
		.then((res) => {
			console.log('GET REVIEW LOG',res);
			dispatch({
				type: FETCH_REVIEWS_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: FETCH_REVIEWS_FAILURE,
				payload: err.message
			});
		});
};

export const addReview = () => (dispatch) => {
	dispatch({ type: ADD_REVIEW_START });
	return axios
		.post('https://bookr-backend.herokuapp.com/api/reviews')
		.then((res) => {
			console.log('ADD REVIEW LOG', res)
			dispatch({
				type: ADD_REVIEW_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			console.log(err);
			dispatch({
				type: ADD_REVIEW_FAILURE,
				payload: err.message
			});
		});
};


export const deleteReview = (id) => (dispatch) => {
	dispatch({ type: DELETE_REVIEW_START });
	axios
		.get(`https://bookr-backend.herokuapp.com/api/reviews/${id}`)
		.then((res) => {
			console.log('DELETE REVIEW LOG',res);
			dispatch({
				type: DELETE_REVIEW_SUCCESSFUL,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: DELETE_REVIEW_FAILURE,
				payload: err.message
			});
		});
};

export const updateReview = (id) => (dispatch) => {
	dispatch({ type: UPDATE_REVIEW_START });
	axios
		.get(`https://bookr-backend.herokuapp.com/api/reviews/${id}`)
		.then((res) => {
			console.log('UPDATE REVIEW LOG',res);
			dispatch({
				type: UPDATE_REVIEW_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: UPDATE_REVIEW_FAILURE,
				payload: err.message
			});
		});
};
