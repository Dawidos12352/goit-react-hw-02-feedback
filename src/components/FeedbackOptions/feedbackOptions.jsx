import React from "react";
import PropTypes from "prop-types";
import css from "./feedbackOptions.module.css"

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        {options.map(option => (
            <button
            className={css.optionBtn}
            key={option}
            onClick={() => onLeaveFeedback(option)}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

