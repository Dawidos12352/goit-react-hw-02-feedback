import React from "react";
import PropTypes from "prop-types";
import css from "./feedbackOptions.module.css"

const FeedbackOptions = ({ handleFeedback, options }) => {
    return (
      <div>
        {options.map((option) => {
          return (
            <button
              className={css.Btn}
              key={option}
              onClick={() => handleFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  };
  
  FeedbackOptions.propTypes = {
    handleFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
  };
  
export default FeedbackOptions;

