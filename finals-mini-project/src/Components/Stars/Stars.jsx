import { FaStar } from "react-icons/fa"
import './Stars.css'
import propTypes from 'prop-types'
import { useState } from "react";

export const Stars = (props) => {
  const [hover, setHover] = useState(null)
  return (
    <div className="stars" >
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <label key={i} style={{ cursor: props.readOnly ? 'default' : 'pointer' }}>
            {!props.readOnly && (
              <input
                type="radio"
                name="rating"
                value={ratingVal}
                onClick={() => props.setRating(ratingVal)}
              />
            )}
            <FaStar
              className="star"
              size={!props.readOnly? 35 : 13}
              color={ratingVal <= (hover || props.rating) ? "rgba(var(--active-color))" : "transparent"}
              onMouseEnter={!props.readOnly ? () => setHover(ratingVal) : undefined}
              onMouseLeave={!props.readOnly ? () => setHover(null) : undefined}
            />
            &nbsp;
          </label>
        );
      })}
    </div>
  );
};

Stars.propTypes = {
  setRating: propTypes.func,
  rating: propTypes.number,
  readOnly: propTypes.bool, // Added new prop
};

Stars.defaultProps = {
  readOnly: false,
};
