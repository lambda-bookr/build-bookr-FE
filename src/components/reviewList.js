import React from 'react';

import Review from './review';
import { Link } from 'react-router-dom';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log('TEST REVIEWS', this.props.reviews);
		return (
			<div>
				{this.props.reviewList &&
					this.props.reviewList.map((review) => {
						console.log('REVIEW ID', review.id);
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
				<Link to={`${this.props.match.url}/reviewform`}>Add Review</Link>
			</div>
		);
	}
}

export default ReviewList;
