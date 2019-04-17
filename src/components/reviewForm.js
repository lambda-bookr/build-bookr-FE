import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../actions';
class ReviewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			review: '',
			rating: '',
			book_id: this.props.match.params.id,
			user_id: localStorage.getItem('userID')
		};
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
		console.log(this.state);
	};

	submitNewReview = (e) => {
		e.preventDefault();
		this.props.addReview(this.state);
		this.setState({
			review: '',
			rating: ''
		});
		this.props.history.push(`/protected/${this.props.match.params.id}`);
	};

	render() {
		console.log('Review Form', this.props);
		return (
			<div className="Review-Form-Wrapper">
				<form onSubmit={this.submitNewReview}>
					<input
						onChange={this.handleInputChange}
						placeholder="review"
						type="text"
						value={this.state.review}
						name="review"
						required
					/>
					<input
						onChange={this.handleInputChange}
						placeholder="rating"
						type="number"
						value={this.state.rating}
						name="rating"
						required
					/>
					<button>Add Review</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { addReview })(ReviewForm);
