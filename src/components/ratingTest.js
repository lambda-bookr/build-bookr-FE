import React from 'react'
import StarRatings from './react-star-ratings';
 
class RatingTest extends React.Component {
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating,
        namepoop: name
      });
    }
 
    render() {
     
      return (
        <StarRatings
          rating={this.state.props.review.rating}
          starRatedColor="green"
          changeRating={this.props.changeRating}
          numberOfStars={5}
          name='rating'
        />
      );
    }
}
 
 
class RatingTest1 extends React.Component {
  render() {
    
    return (
      <StarRatings
        rating={this.props.review.rating}
        starDimension="40px"
        starSpacing="15px"
      />
    );
  }
}
export default (RatingTest, RatingTest1)