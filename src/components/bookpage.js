import React from 'react';
import { connect } from 'react-redux';
import { getBookPage, deleteBook } from '../actions';
import ReviewList from './reviewList';
import StarRatingComponent from 'react-star-rating-component';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class BookPage extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			open:false
		}
	};

	componentDidMount() {
		if (Number(this.props.match.params.id) !== this.props.book.id) {
			this.props.getBookPage(this.props.match.params.id);
		}
	}
	deleteBook = () => {
		this.props.deleteBook(this.props.book.id);
		this.props.history.push('/protected');
	};
	handleClickOpen = () => {
		this.setState({ open: true });
	  };
	
	  handleClose = () => {
		this.setState({ open: false });
	  };

	render() {
		return (
			<div className="Book">
			
				
			<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Delete Book
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Book?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             Do you really want to delete this book?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteBook} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
				<h3 className="BookTitle">{this.props.book.title}</h3>
				<img src={this.props.book.imageUrl} alt="Book" />
				<ul className="BookInfo">
					<li>Author: {this.props.book.author}</li>
					<li>Price: $ {this.props.book.price}</li>
					<li>Publisher:{this.props.book.publisher}</li>
					<li>Synopsis:{this.props.book.description}</li>
				
					<StarRatingComponent
						className="Agg-Rating"
						name="rating"
						starCount={5}
						editing={false}
						value={this.props.book.rating}
					/>
				</ul>

				<div className="Review-Wrapper">
					<ReviewList className="Review-Page" match={this.props.match} reviewList={this.props.book.reviews} />
				</div>

				
				<div className="">
					{/* {this.state.showModal && alert('Are you sure?')}
					<button onClick={()=> (
						this.state.showModal ?
						this.deleteBook : 
						this.setState({
							...this.state,
							showModal:true
						})
						)
					}>Delete Book</button>
					<button>Cancel</button> */}
				</div>
				{/* <ReviewList match={this.props.match} reviewList={this.props.book.reviews} /> */}
			</div>
		);
	}
}

const mapStateToProps = ({ book, isfetching }) => ({
	book,
	isfetching
});

export default connect(mapStateToProps, { getBookPage, deleteBook })(BookPage);


