import React from 'react';
import { connect } from 'react-redux';
import { getBookPage, deleteBook, updateBook } from '../actions';
import ReviewList from './reviewList';
import StarRatingComponent from 'react-star-rating-component';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import UpdateButton from './updateButton';
import { Link } from 'react-router-dom';

class BookPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			updateBook: {
				title: '',
				author: '',
				price: '',
				publisher: '',
				description: '',
				imageUrl: '',
				user_id: localStorage.getItem('userID')
			}
		};
	}

	componentDidMount() {
		if (Number(this.props.match.params.id) !== this.props.book.id) {
			this.props.getBookPage(this.props.match.params.id);
		}
	}
	deleteBook = () => {
		this.props.deleteBook(this.props.book.id);
		this.props.history.push('/protected');
	};
	updateBook = () => {
		this.props.updateBook(this.props.book.id, this.state.updateBook);
		this.props.history.push(`/protected/${this.props.match.params.id}`);
	};
	handleTextFieldChange = (e) => {
		this.setState({
			updateBook: {
				...this.state.updateBook,
				[e.target.name]: e.target.value
			}
		});
	};

	handleClickOpen = () => {
		this.setState({
			open: true
		});
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		console.log('look at me', this.props.match);
		console.log(this.props.match.url);
		return (
			//delete book
			<div className="Book">
<<<<<<< HEAD
			<div className="Update-Delete">
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
				<MenuButton/>
		{/* delete book end */}

		
	
		<div>
=======
				<div className="Update-Delete">
					<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
						Delete Book
					</Button>
					<Dialog
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">{'Delete Book?'}</DialogTitle>
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
					{/* delete book end */}

					<UpdateButton />

					<div />
				</div>
>>>>>>> fa1e440c53936e57e8de7c284bc3ab1dfa3f61c9

				<h3 className="BookTitle">{this.props.book.title}</h3>
				<img src={this.props.book.imageUrl} alt="Book" />
				<ul className="BookInfo">
					<li>Author: {this.props.book.author}</li>
					<li>Price: $ {this.props.book.price}</li>
					<li>Publisher:{this.props.book.publisher}</li>
					<li>Synopsis:{this.props.book.description}</li>

					{/* average review score */}
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
			</div>
		);
	}
}

const mapStateToProps = ({ book, isfetching }) => ({
	book,
	isfetching
});

export default connect(mapStateToProps, { getBookPage, deleteBook, updateBook })(BookPage);
