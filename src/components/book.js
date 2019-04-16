import React from 'react'

const Book = props =>{
    return(
        <div className='Book'>
        <h3 className='Book-Title'>{props.name}</h3>
        <img src='{props.imageURL}' alt='Book '></img>
        <div className="Book-Info">
        <li>{props.author}</li>
        <li>{props.price}</li>
        <li>{props.publisher}</li>
        <li>{props.description}</li>
        <li>{props.user_id}</li>
          
            
            

        
        </div>
        <button>delete</button>
        </div>
    )
}
Book.defaultProps = {
    name: '',
    imageURL: '',
    author: '',
    price: '',
    publisher:'',
    description:'',
    user_id:''

  };

export default Book