import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = (props) => {
	return (
		<div className="Review">
			<h3 className="Review-Title">Review:</h3>
			<div className="Review-Top">
				<h4>{props.username}</h4>
				<img className="Review-Image" src={props.thumbnailUrl} alt="useravatar" />
			</div>
			<div className="Review-Text">
				<p>{props.review.review}</p>
				<StarRatingComponent
					className="Star-Rating"
					name="Rating"
					starCount={5}
					editing={false}
					value={props.rating}
				/>
			</div>
		</div>
	);
};

export default Review;
