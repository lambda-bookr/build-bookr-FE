import React from 'react';

const Review = (props) => {
	return (
		<div className="Review">
			<div className="Review-Info">
				<h4>{props.username}</h4>
				<img src={props.thumbnailUrl} alt="user avatar" />
				<button>{props.rating}</button>
				<p>{props.review.review}</p>
			</div>
		</div>
	);
};

export default Review;
