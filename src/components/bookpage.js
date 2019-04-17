import React from 'react';
import { connect } from 'react-redux';
import { getBookPage, deleteBook } from '../actions';
import ReviewList from './reviewList';
import StarRatingComponent from 'react-star-rating-component';

class BookPage extends React.Component {
	componentDidMount() {
		this.props.getBookPage(this.props.match.params.id);
	}
deleteBook = () => {
		this.props.deleteBook(this.props.book.id);
		this.props.history.push('/protected');
}
	render() {
		return (
			<div className="Book">
		
				<h3 className="BookTitle">{this.props.book.title}</h3>
				<img src={this.props.book.imageUrl} alt="Book" />
				<ul className="BookInfo">
				
				
					<li>Author: {this.props.book.author}</li>
					<li>Price: $ {this.props.book.price}</li>
					<li>Publisher:{this.props.book.publisher}</li>
					<li>Synopsis:{this.props.book.description}</li>
					{/* <li>Rating:{this.props.book.rating}</li> */}
					<StarRatingComponent 
						className='Agg-Rating'
						name="rating"
						starCount={5}
						editing={false}
						value={this.props.book.rating}
					/>
					
					
				</ul>
				
				
				<div className='Review-Wrapper'>
				
				
				<ReviewList className='Review-Page' match={this.props.match} reviewList={this.props.book.reviews}/>
				
				

				</div>
				
			
				<button onClick={this.deleteBook}>Delete Book</button>
			
			</div>
		);
	}
}

const mapStateToProps = ({ book }) => ({
	book
});

export default connect(mapStateToProps, { getBookPage, deleteBook })(BookPage);
