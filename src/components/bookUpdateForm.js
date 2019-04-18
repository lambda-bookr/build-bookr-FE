import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../actions';

class UpdateBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			updatedBook: {
				title: '',
				user_id: localStorage.getItem('userID'),
				author: '',
				price: '',
				publisher: '',
				description: '',
				imageUrl: ''
			}
		};
	}

	handleInputChange = (e) => {
		this.setState({
			updatedBook: {
				...this.state.updatedBook,
				[e.target.name]: e.target.value
			}
		});
	};

	submitUpdatedBook = (e) => {
		e.preventDefault();

		this.props.updateBook(this.props.book.id, this.state.updatedBook);

		this.setState({
			updatedBook: {
				title: '',
				author: '',
				price: '',
				publisher: '',
				description: '',
				imageUrl: ''
			}
		});
		this.props.history.push(`/protected/${this.props.match.params.id}`);
	};

	render() {
		// console.log('BOOK UPDATE', this.props);
		return (
			<div>
				<form onSubmit={this.submitUpdatedBook}>
					<input
						type="text"
						name="title"
						value={this.state.updatedBook.title}
						onChange={this.handleInputChange}
						placeholder="Title"
					/>
					<input
						type="text"
						name="author"
						value={this.state.updatedBook.author}
						onChange={this.handleInputChange}
						placeholder="Author"
					/>
					<input
						type="text"
						name="price"
						value={this.state.updatedBook.price}
						onChange={this.handleInputChange}
						placeholder="price"
					/>
					<input
						type="text"
						name="publisher"
						value={this.state.updatedBook.publisher}
						onChange={this.handleInputChange}
						placeholder="publisher"
					/>
					<input
						type="text"
						name="description"
						value={this.state.updatedBook.description}
						onChange={this.handleInputChange}
						placeholder="description"
					/>
					<input
						type="text"
						name="imageUrl"
						value={this.state.updatedBook.imageUrl}
						onChange={this.handleInputChange}
						placeholder="imageUrl"
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ book }) => ({
	book
});

export default connect(mapStateToProps, { updateBook })(UpdateBook);
