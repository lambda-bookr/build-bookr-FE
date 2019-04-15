import React, { Component } from 'react';

import Book from './book';

class BookList extends Component {
  render() {
    return (
      <div className="Books">
        <h1>Sum books</h1>
        <ul>
          {this.props.books.map(books => {
            return (
              <div>
<Book
                name={books.name}
                id={books.id}
                age={books.age}
                height={books.height}
                key={books.id}
              />
              <form>
              <button>delete</button>
              </form>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Book.defaultProps = {
 Book: [],
};

export default BookList;