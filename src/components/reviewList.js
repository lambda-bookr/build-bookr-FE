import React from 'react';
import { connect } from 'react-redux';
import Review from './review';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


class ReviewList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.reviewList &&
					this.props.reviewList.map((review) => {
						return (
							<div key={review.id}>
								<Review
									username={review.username}
									review={review}
									id={review.id}
									rating={review.rating}
									thumbnailUrl={review.thumbnailUrl}	
								/>
								<StarRatingComponent 
								className='Star-Rating'
								 name="Rating"
								 starCount={5}
								 editing={false}
								 value={review.rating}		
									/>
						
					
								
							</div>
						);
					})}
				<Link className='Link' to={`${this.props.match.url}/reviewform`}>Add Review</Link>
			</div>
		);
	}
}

const mapStateToProps = ({ reviews }) => ({
	reviews
});

export default connect(mapStateToProps, {})(ReviewList);
