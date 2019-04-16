import React from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../actions';
import Review from './review';
import { Link } from 'react-router-dom';

class ReviewList extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getReviews(this.props.bookId);
	}

	render() {
		console.log(this.props.match);
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
				<Link to={`${this.props.match.url}/reviewform`}>Add Review</Link>
			</div>
		);
	}
}

const mapStateToProps = ({ reviews }) => ({
	reviews
});

export default connect(mapStateToProps, { getReviews })(ReviewList);
