import React from 'react';
import { connect } from 'react-redux';
import { getBookPage } from '../actions';

class BookPage extends React.Component {
	componentDidMount() {
		this.props.getBookPage(this.props.match.params.id);
	}

	render() {
		console.log('BOOK PAGE', this.props);
		return (
			<div className="Book">
				<h3 className="Book-Title">{this.props.book.name}</h3>
				<img src={this.props.book.imageURL} alt="Book" />
				<div className="Book-Info">
					<li>{this.props.book.author}</li>
					<li>{this.props.book.price}</li>
					<li>{this.props.book.publisher}</li>
					<li>{this.props.book.description}</li>
					<li>{this.props.book.user_id}</li>
				</div>
				<button>Delete</button>
			</div>
		);
	}
}

const mapStateToProps = ({ book }) => ({
	book
});

export default connect(mapStateToProps, { getBookPage })(BookPage);
