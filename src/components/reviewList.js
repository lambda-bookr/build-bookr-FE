import React from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../actions';
import Review from './review';
import { Link } from 'react-router-dom';

class ReviewList extends React.Component {
	componentDidMount() {
		this.props.getReviews();
	}

	render() {
		return (
			<div>
				{this.props.review.map((review) => {
					return (
						<Link to={`/protected/${review.id}`} key={review.id}>
							<Review
								review={review.review}
								rating={review.rating}
								book_id={review.book_id}
								user_id={review.user_id}
								key={review.id}
							/>
						</Link>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = ({ reviews }) => ({
	reviews
});

export default connect(mapStateToProps, { getReviews })(ReviewList);