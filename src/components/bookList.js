import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
	// componentDidMount() {
	// 	this.props.getBooks();
	// }

	render() {
		return (
			<div>
				<ul>
					TEST
					{/* {this.props.books.map((book) => {
						return <div key={book.name}>{book.name}</div>;
					})} */}
				</ul>
			</div>
		);
	}
}

// const mapStateToProps = ({ books }) => ({
// 	books
// });

export default connect(null, {})(BookList);
