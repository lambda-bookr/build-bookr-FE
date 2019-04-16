import React from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../actions';
import Review from './review';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getReviews(this.props.bookId);
	}

	render() {
		return (
			<div>
				{this.props.reviews.map((review) => {
					return (
						<div key={review.id}>
							<Review
								username={review.username}
								review={review}
								id={review.id}
								rating={review.rating}
								thumbnailUrl={review.thumbnailUrl}
							/>
						</div>
					);
				})}
				<button> Add Review</button>
			</div>
		);
	}
}

const mapStateToProps = ({ reviews }) => ({
	reviews
});

export default connect(mapStateToProps, { getReviews })(ReviewList);
