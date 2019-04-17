import React from 'react';
import { connect } from 'react-redux';
import { getBookPage } from '../actions';
import ReviewList from './reviewList';

class BookPage extends React.Component {
	componentDidMount() {
		this.props.getBookPage(this.props.match.params.id);
	}

	render() {
		console.log('BOOK PAGE', this.props);
		return (
			<div className="Book">
				<h3 className="BookTitle">{this.props.book.title}</h3>
				<img src={this.props.book.imageURL} alt="Book" />
				<ul className="BookInfo">
					<li>Author: {this.props.book.author}</li>
					<li>Price: $ {this.props.book.price}</li>
					<li>Publisher:{this.props.book.publisher}</li>
					<li>Synopsis:{this.props.book.description}</li>
					{/* <li>Rating:{this.props.book.rating}</li> */}
					
					
				</ul>
				<button>Delete Book</button>
				<div className='Review-Wrapper'>
				
				
				<ReviewList className='Review-Page' match={this.props.match} reviewList={this.props.book.reviews}/>
				
				

				</div>
				
			
			</div>
		);
	}
}

const mapStateToProps = ({ book }) => ({
	book
});

export default connect(mapStateToProps, { getBookPage })(BookPage);
