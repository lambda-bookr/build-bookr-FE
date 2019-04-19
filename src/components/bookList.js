import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions';
import Book from './book';
import { Link } from 'react-router-dom';

class BookList extends React.Component {
	componentDidMount() {
		this.props.getBooks();
	}

	render() {
		return (
			<div className="Book-Flex">
				{this.props.books.map((book) => {
					return (
						<Link className="book-link" to={`/protected/${book.id}`} key={book.id}>
							<Book
								name={book.title}
								imageUrl={book.imageUrl}
								author={book.author}
								price={book.price}
								publisher={book.publisher}
								// description={book.description}
								key={book.id}
							/>
						</Link>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = ({ books }) => ({
	books
});

export default connect(mapStateToProps, { getBooks })(BookList);
