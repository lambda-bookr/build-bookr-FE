import React, { Component } from 'react';

class ReviewForm extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {
	//         review: '',
	//         rating: '',
	//         book_id: '',
	//         user_id:''
	//     }
	// }

	// submitChange = e => {
	//     e.preventDefault();
	//     this.props.addReview(this.state)
	// }

	// handleInputChange = e => {
	//     this.setState ({
	//         [e.target.name]: e.target.value
	//     })
	// }

	render() {
		return (
			<h1>Hello</h1>
			// <div className="Review-Form-Wrapper">
			// 	<form onSubmit={this.submitChange}>
			// 		<input
			// 			onChange={this.handleInputChange}
			// 			placeholder="review"
			// 			value={this.state.review}
			// 			name="reivew"
			// 		/>
			// 		<input
			// 			onChange={this.handleInputChange}
			// 			placeholder="rating"
			// 			value={this.state.rating}
			// 			name="rating"
			// 		/>
			// 		<input
			// 			onChange={this.handleInputChange}
			// 			placeholder="Book ID"
			// 			value={this.state.book_id}
			// 			name="book_id"
			// 		/>
			// 		<input
			// 			onChange={this.handleInputChange}
			// 			placeholder="User ID"
			// 			value={this.state.user_id}
			// 			name="user_id"
			// 		/>
			// 		<button type="submit">Add Review</button>
			// 	</form>
			// </div>
		);
	}
}

export default ReviewForm;
