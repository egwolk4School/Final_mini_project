import feedback from './../../Data/CompanyReviews.json'
import { useState,useEffect,useRef } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Stars } from '../../Components/Stars/Stars'
import './Feedback.css'
import { FeedbackForm } from './FeedbackForm'
export const Feedback = () => {
  const [reviews, setReviews] = useState(feedback);
  const mgaReviewRef = useRef(null);
  const addReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews,newReview ]);
  };
  const listReviews = reviews.map((review, index) => (
    <li key={index}>
       <div className="users">
          <FaUserCircle className='user-circle'/>&nbsp;
          <h3><strong>{review.nickname}</strong></h3>
       </div>
      <div className="not-nickname">
        <Stars rating={review.rating} readOnly={true} />
        <p>{review.review} </p>
      </div>
    </li>
  ))
  useEffect(() => {
    if (mgaReviewRef.current) {
      mgaReviewRef.current.scrollTop = mgaReviewRef.current.scrollHeight;
    }
  }, [reviews])

  return (
    <>
        <div className="section">
            <div className="feedback-container">
            <h2>Company Reviews</h2>
                <div className="mga-review" ref={mgaReviewRef}>
                  <ul>{listReviews}</ul>
                </div>
                <div className="form-area">
                    <FeedbackForm onAddReview={addReview}/>
                </div>
            </div>
        </div>
    </>
  )
}
