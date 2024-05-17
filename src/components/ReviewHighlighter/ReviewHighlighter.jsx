
import"./ReviewHighlighter.css";
import Content from "../Content/Content";
import { FaSave, FaUser } from 'react-icons/fa';

const ReviewHighlighter = ({review}) => {
// Function to render star icons based on the rating
const renderStars = (rating) => {
  const starCount = Math.round(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < starCount) {
      stars.push(<span className="star" key={i}>&#9733;</span>); // Full star
    } else {
      stars.push(<span className="star" key={i}>&#9734;</span>); // Empty star
    }
  }
  return stars;
};

 console.log(review.analytics,"hey")

  return (
    <div className="reviews-system">
      <div className="image-part">
          <img src={review.source&&review.source.icon} alt="images"/>
          </div>
       <div className="content">
      <div className="first-part">
         <div className="reviewer">
            <span className="name">{review.reviewer_name} </span>wrote a review at <span className="name">TripAdvisor.com</span>
          </div>
        <div className="icons">
       <FaUser size={12} />
       <FaSave size={12}  />
       </div>
       </div>
        <div className="second-part">
        <div className="rating">
              {/* {review.rating_review_score} */}
              {renderStars(review.rating_review_score)}
        </div>
        <div className="date">
          {review.date}
        </div>
      </div>
      <div className="third-part">
        {/* {review.content} */}
        <Content analytics={review.analytics} content={review.content}/>
      </div>
  </div>
  </div>
  )
}

export default ReviewHighlighter