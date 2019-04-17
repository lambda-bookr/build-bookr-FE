import React from 'react';

const Book = (props) => {
	return (
		<div className="Books">
         <div className='Book-Top'>
          <h3 className="BookTitle">{props.name}</h3>
		  <img src={props.imageUrl} alt="Book Cover" />
         </div>
			<ul className="BookInfo">
				<li>Author: {props.author}</li>
				<li>Price: $ {props.price}</li>
				<li>Publisher: {props.publisher}</li>
				<li>Synopsis: {props.description}</li>
				<li>User: {props.user_id}</li>
			</ul>
		</div>
	);
};

export default Book;
