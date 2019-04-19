import React from 'react';

const Book = (props) => {
	return (
		<div className="Books">
			<div className="Book-Top">
				<h3 className="BookTitle">{props.name}</h3>
				<div className="Book-Image">
					<img className="Cover-Image" src={props.imageUrl} alt="Book Cover" />
				</div>
			</div>
			<ul className="BookInfo">
				<li>Author: {props.author}</li>
				<li>Price: $ {props.price}</li>
				<li>Publisher: {props.publisher}</li>
				<li>Synopsis: {props.description}</li>
<<<<<<< HEAD
				
=======
>>>>>>> 214a8da9818c40c545914a02a10741f94ff093b7
			</ul>
		</div>
	);
};

export default Book;
