import React from 'react';

const Book = (props) => {
	return (
		<div className="Book">
			<h3 className="BookTitle">{props.name}</h3>
			<img src={props.imageURL} alt="Book Cover" />
			<ul className="BookInfo">
				<li>{props.author}</li>
				<li>{props.price}</li>
				<li>{props.publisher}</li>
				<li>{props.description}</li>
				<li>{props.user_id}</li>
			</ul>
		</div>
	);
};

export default Book;
