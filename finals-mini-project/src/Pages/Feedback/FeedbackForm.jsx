import { useState, useRef } from "react"
import { Stars } from "./../../Components/Stars/Stars"
import propTypes from 'prop-types'
import './forn.css'
export const FeedbackForm = (props) => {
  const [rating, setRating] = useState(null)
  const nicknameRef = useRef(null)
  const reviewRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!rating) {
      alert("Please select a star rating.");
      return;
    }

    const newReview = {
      nickname: nicknameRef.current.value,
      review: reviewRef.current.value,
      rating: rating,
    }

    props.onAddReview(newReview)
    setRating(null);
    nicknameRef.current.value = ""
    reviewRef.current.value = ""
  }

  return (
    <form onSubmit={handleSubmit} >
        <div className="cake">
        <div className="top-layer">
        <input
        type="text"
        name="nickname"
        id="nickname"
        placeholder="nickname"
        ref={nicknameRef}
        required
      />
      <Stars rating={rating} setRating={setRating} />
        </div>
     <div className="bot-layer">
     <textarea
        name="review"
        id="review"
        placeholder="Write your own review..."
        ref={reviewRef}
        required
      ></textarea>
      
     </div>
        </div>
     <button type="submit">Submit</button>
    </form>
  )
}
FeedbackForm.propTypes={
    onAddReview:propTypes.func
}
