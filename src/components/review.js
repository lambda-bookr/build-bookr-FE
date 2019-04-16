import React from 'react'

const Review = props =>{
    return(
        <div className='Review'>
        
        <div className="Review-Info">
        <p>{props.review}</p>
        <button>{props.rating}</button>
        <p>{props.book_id}</p>
        <p>{props.user_id}</p>
          
        <div>
        <button>delete</button>
        </div>
       
        </div>
        </div>
    )
}
Review.defaultProps = {
    

  };

export default Review