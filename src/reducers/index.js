// REDUCERS

import {
	//books fetch
	FETCH_BOOKS_START,
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_FAILURE,
	//login
	LOGIN_SUCCESS,
	LOGIN_FETCHING,
	LOGIN_FAILURE,
	//register
	REGISTER_SUCCESS,
	REGISTER_FETCHING,
	REGISTER_FAILURE,
	//book fetch
	FETCH_BOOK_START,
	FETCH_BOOK_SUCCESS,
	FETCH_BOOK_FAILURE,
	//review fetch
	FETCH_REVIEWS_START,
	FETCH_REVIEWS_SUCCESS,
	FETCH_REVIEWS_FAILURE,
	//add review
	ADD_REVIEW_START,
	ADD_REVIEW_SUCCESS,
	ADD_REVIEW_FAILURE,
	//delete review
	DELETE_REVIEW_START,
	DELETE_REVIEW_SUCCESSFUL,
	DELETE_REVIEW_FAILURE,
	//update review
	UPDATE_REVIEW_START,
	UPDATE_REVIEW_SUCCESS,
	UPDATE_REVIEW_FAILURE,
	//delete book
	DELETE_BOOK_START,
	DELETE_BOOK_SUCCESS,
	DELETE_BOOK_FAILURE



} from '../actions';

const initialstate = {
	books: [],
	book: {},
	fetchingBooks: false,
	loggingIn: false,
	isfetching: false,
	error: null
};

const reducer = (state = initialstate, action) => {
	switch (action.type) {
		//login reducers
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
			//book reducers
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
		case FETCH_BOOK_START:
			return {
				...state,
				err: '',
				fetchingBooks: true
			};
		case FETCH_BOOK_SUCCESS:
			return {
				...state,
				err: '',
				isfetching: false,
				book: { ...action.payload }
			};
		case FETCH_BOOK_FAILURE: {
			return {
				...state,
				err: action.payload,
				isfetching: false
			};
		}
		case DELETE_BOOK_START:
		return {
			...state,
			loggingIn: false,
			isfetching: true,
			error: ''
		};
	case DELETE_BOOK_SUCCESS:
		return {
			...state,
			loggingIn: true,
			isfetching: false,
			error: ''
		};
	case DELETE_BOOK_FAILURE:
		return {
			...state,
			loggingIn: false,
			isfetching: false,
			err: action.payload
		};
		
		//register reducers
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
//still needs testing below
			//review reducers 
			case FETCH_REVIEWS_START:
			return {
				...state,
				err: '',
				fetchingBooks: true
			};
		case FETCH_REVIEWS_SUCCESS:
			return {
				...state,
				err: '',
				isfetching: false,
				book: { ...action.payload }
			};
		case FETCH_REVIEWS_FAILURE: {
			return {
				...state,
				err: action.payload,
				isfetching: false
			};
		}
		case ADD_REVIEW_START:
		return {
			...state,
			loggingIn: false,
			isfetching: true,
			error: ''
		};
	case ADD_REVIEW_SUCCESS:
		return {
			...state,
			loggingIn: true,
			isfetching: false,
			error: ''
		};
	case ADD_REVIEW_FAILURE:
		return {
			...state,
			loggingIn: false,
			isfetching: false,
			err: action.payload
		};
		case DELETE_REVIEW_START:
		return {
			...state,
			loggingIn: false,
			isfetching: true,
			error: ''
		};
	case DELETE_REVIEW_SUCCESSFUL:
		return {
			...state,
			loggingIn: true,
			isfetching: false,
			error: ''
		};
	case DELETE_REVIEW_FAILURE:
		return {
			...state,
			loggingIn: false,
			isfetching: false,
			err: action.payload
		};
		case UPDATE_REVIEW_START:
		return {
			...state,
			loggingIn: false,
			isfetching: true,
			error: ''
		};
	case UPDATE_REVIEW_SUCCESS:
		return {
			...state,
			loggingIn: true,
			isfetching: false,
			error: ''
		};
	case UPDATE_REVIEW_FAILURE:
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