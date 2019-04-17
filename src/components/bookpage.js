import React from 'react';
import { connect } from 'react-redux';
import { getBookPage, deleteBook } from '../actions';
import ReviewList from './reviewList';

class BookPage extends React.Component {
	// constructor() {
	// 	super();
	// 	state: {
	// 		showModule: false;
	// 	}
	// }
	componentDidMount() {
		if (Number(this.props.match.params.id) !== this.props.book.id) {
			this.props.getBookPage(this.props.match.params.id);
		}
	}

	deleteBook = () => {
		this.props.deleteBook(this.props.book.id);
		this.props.history.push('/protected');
	};
	render() {
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
				{/* <div className="">
					<p>Are you sure?</p>
					<button onClick={this.deleteBook}>Delete Book</button>
					<button>Cancel</button>
				</div> */}
				<ReviewList match={this.props.match} reviewList={this.props.book.reviews} />
			</div>
		);
	}
}

const mapStateToProps = ({ book, isfetching }) => ({
	book,
	isfetching
});

export default connect(mapStateToProps, { getBookPage, deleteBook })(BookPage);

//    border: 2px solid red;
// position: absolute;
// left: 50%;
// top: 50%;
// width: 500px;
// height: 400px;
// background: grey;
// transform: translate(-50%, -50%);
