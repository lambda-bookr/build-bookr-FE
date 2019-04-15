// REDUCERS

import {
	FETCH_BOOKS_START,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_FAILURE,
	LOGIN_SUCCESS,
	LOGIN_FETCHING,
	LOGIN_FAILURE,
	REGISTER_SUCCESS,
	REGISTER_FETCHING,
	REGISTER_FAILURE
} from '../actions';

const initialstate = {
	books: [],
	fetchingBooks: false,
	loggingIn: false,
	isfetching: false,
	error: null
};

const reducer = (state = initialstate, action) => {
	switch (action.type) {
		case LOGIN_FETCHING:
			return {
				...state,
				loggingIn: false,
				isfetching: true,
				error: ''
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loggingIn: true,
				isfetching: false,
				error: ''
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loggingIn: false,
				isfetching: false,
				err: action.payload
			};
		case FETCH_BOOKS_START:
			return {
				...state,
				err: '',
				fetchingBooks: true
			};
		case FETCH_BOOKS_SUCCESS:
			return {
				...state,
				err: '',
				isfetching: false,
				books: [ ...action.payload ]
			};
		case FETCH_BOOKS_FAILURE: {
			return {
				...state,
				err: action.payload,
				isfetching: false
			};
		}
		case REGISTER_FETCHING:
			return {
				...state,
				loggingIn: false,
				isfetching: true
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				loggingIn: true,
				isfetching: false
			};
		case REGISTER_FAILURE:
			return {
				...state,
				loggingIn: false,
				isfetching: false,
				err: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
