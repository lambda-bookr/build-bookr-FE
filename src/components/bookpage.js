import React from 'react';
import { connect } from 'react-redux';
import { getBookPage, deleteBook } from '../actions';
import ReviewList from './reviewList';

class BookPage extends React.Component {
	componentDidMount() {
		this.props.getBookPage(this.props.match.params.id);
	}

	deleteBook = () => {
		this.props.deleteBook(this.props.book.id);
		this.props.history.push('/protected');
	};
	render() {
		console.log('BOOK PAGE', this.props.book.id);
		return (
			<div className="Book">
				<h3 className="BookTitle">{this.props.book.title}</h3>
				<img src={this.props.book.imageURL} alt="Book" />
				<ul className="BookInfo">
					<li>{this.props.book.author}</li>
					<li>{this.props.book.price}</li>
					<li>{this.props.book.publisher}</li>
					<li>{this.props.book.description}</li>
					<li>{this.props.book.rating}</li>
				</ul>
				<button onClick={this.deleteBook}>Delete Book</button>
				<ReviewList match={this.props.match} reviewList={this.props.book.reviews} />
			</div>
		);
	}
}

const mapStateToProps = ({ book }) => ({
	book
});

export default connect(mapStateToProps, { getBookPage, deleteBook })(BookPage);
