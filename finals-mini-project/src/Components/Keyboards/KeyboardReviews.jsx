import { useLocation } from "react-router-dom";
import { useState,useEffect,useRef  } from "react";
import { KeyboardReviewForm } from "./KeyboardReviewForm";
import { Stars } from "../Stars/Stars";

export const KeyboardReviews = () => {
  const location = useLocation();
  const { reviews: initialReviews } = location.state.keyboard;
  const [reviews, setReviews] = useState(initialReviews);
  const mgaReviewRef = useRef(null)
  const addReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews,newReview]);
  };

  const listReviews = reviews.map((review, index) => (
    <li key={index}>
      <strong>{review.reviewer}:</strong> {review.review} <br />
      <Stars rating={review.rating} readOnly={true} />
    </li>
  ));
  useEffect(() => {
    if (mgaReviewRef.current) {
      mgaReviewRef.current.scrollTop = mgaReviewRef.current.scrollHeight;
    }
  }, [reviews])

  return (
    <>
        <h3 style={{marginTop:'0.5rem', color:'rgba(var(--active-color))'}}>Reviews</h3>
        <ul className="revs" ref={mgaReviewRef}>{listReviews}</ul>
        <div className="user-in">
            <KeyboardReviewForm onAddReview={addReview} />
        </div>
      
    </>
  );
};
