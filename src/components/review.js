import React from 'react';

const Review = (props) => {
	console.log('REVIEW', props.review);
	return (
       
        <div className="Review">
        <h3 className='Review-Title'>Review:</h3>
            <div className='Review-Top'>
            <h4>{props.username}</h4>
                <img 
                className="Review-Image" 
                src={props.thumbnailUrl} alt="useravatar"/>
            </div>	
            <div className='Review-Text'>
            <p>{props.review.review}</p>
            </div>
				
                <button className='RatingsBtn'>{props.rating}</button>
			</div>
		
        
		
	);
};

export default Review;
