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
		this.props.history.push(`/protected/${this.props.match.params.id}`);
		this.setState({
			review: '',
			rating: '',
			book_id: this.props.match.params.id,
			user_id: localStorage.getItem('userID')
		});
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
					{/* <select onChange={this.handleInputChange} name="rating" value={this.state.rating}>
						<option value={this.state.rating}>1</option>
						<option value={this.state.rating}>2</option>
						<option value={this.state.rating}>3</option>
						<option value={this.state.rating}>4</option>
						<option value={this.state.rating}>5</option>
					</select> */}
					<button>Add Review</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { addReview })(ReviewForm);

// "/protected/:id/
