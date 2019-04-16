import React from 'react';
import { connect } from 'react-redux';
import { getBookPage } from '../actions';
import ReviewList from './reviewList';

class BookPage extends React.Component {
	componentDidMount() {
		this.props.getBookPage(this.props.match.params.id);
	}

	render() {
		console.log('BOOK PAGE', this.props);
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
				<button>Delete Book</button>
				<ReviewList bookId={this.props.match.params.id} />
			</div>
		);
	}
}

const mapStateToProps = ({ book }) => ({
	book
});

export default connect(mapStateToProps, { getBookPage })(BookPage);
