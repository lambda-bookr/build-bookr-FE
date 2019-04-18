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
	LOGIN_OUT,
	TOKEN_EXIST,
	//register
	REGISTER_SUCCESS,
	REGISTER_FETCHING,
	REGISTER_FAILURE,
	//review fetch
	FETCH_REVIEWS_START,
	FETCH_REVIEWS_SUCCESS,
	FETCH_REVIEWS_FAILURE,
	//add review
	ADD_REVIEW_START,
	ADD_REVIEW_SUCCESS,
	ADD_REVIEW_FAILURE,

	//delete book
	DELETE_BOOK_START,
	DELETE_BOOK_SUCCESS,
	DELETE_BOOK_FAILURE,
	//update book
	UPDATE_BOOK_START,
	UPDATE_BOOK_SUCCESS,
	UPDATE_BOOK_FAILURE,
	//get book
	FETCH_BOOK_START,
	FETCH_BOOK_SUCCESS,
	FETCH_BOOK_FAILURE
	// UPDATE_BOOK_START,
	// UPDATE_BOOK_SUCCESS,
	// UPDATE_BOOK_FAILURE,
	// DELETE_BOOK_START,
	// DELETE_BOOK_SUCCESS,
	// DELETE_BOOK_FAILURE
} from '../actions';

const initialstate = {
	books: [],
	book: {},
	fetchingBooks: false,
	loggingIn: false,
	isfetching: false,
	error: null,
	reviews: []
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
		case LOGIN_OUT:
			return {
				...state,
				loggingIn: false
			};
		case TOKEN_EXIST:
			return {
				...state,
				loggingIn: true
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
				fetchingBooks: false,
				books: [ ...action.payload ]
			};
		case FETCH_BOOKS_FAILURE: {
			return {
				...state,
				err: action.payload,
				fetchingBooks: false
			};
		}
		case FETCH_BOOK_START:
			return {
				...state,
				err: '',
				isfetching: true
			};
		case FETCH_BOOK_SUCCESS:
			return {
				...state,
				err: null,
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
				isfetching: true,
				error: ''
			};
		case DELETE_BOOK_SUCCESS:
			return {
				...state,
				isfetching: false,
				books: state.books.filter((book) => {
					return book.id !== action.payload;
				}),
				error: ''
			};
		case DELETE_BOOK_FAILURE:
			return {
				...state,
				isfetching: false,
				err: action.payload
			};

		case UPDATE_BOOK_START:
			return {
				...state,
				isfetching: true,
				error: ''
			};
		case UPDATE_BOOK_SUCCESS:
			return {
				...state,
				isfetching: false,
				book: { ...action.payload },
				error: ''
			};
		case UPDATE_BOOK_FAILURE:
			return {
				...state,
				isfetching: false,
				err: action.payload
			};

		/// UPDATE BOOK
		case UPDATE_BOOK_START:
			return {
				...state,
				isfetching: true,
				error: ''
			};
		case UPDATE_BOOK_SUCCESS:
			return {
				...state,
				isfetching: false,
				book: { ...action.payload },
				error: ''
			};
		case UPDATE_BOOK_FAILURE:
			return {
				...state,
				isfetching: false,
				err: action.payload
			};

		// Register reducers
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

		// Review reducers
		case FETCH_REVIEWS_START:
			return {
				...state,
				err: '',
				fetchingBooks: true
			};
		case FETCH_REVIEWS_SUCCESS:
			return {
				...state,
				isfetching: false,
				reviews: [ ...action.payload ],
				err: ''
			};
		case FETCH_REVIEWS_FAILURE: {
			return {
				...state,
				isfetching: false,
				err: action.payload
			};
		}
		//still needs testing below
		case ADD_REVIEW_START:
			return {
				...state,
				isfetching: true,
				error: ''
			};
		case ADD_REVIEW_SUCCESS:
			return {
				...state,
				isfetching: false,
				book: {
					...state.book,
					reviews: [ ...state.book.reviews, { ...action.payload } ]
				},
				error: ''
			};
		case ADD_REVIEW_FAILURE:
			return {
				...state,
				isfetching: false,
				err: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
