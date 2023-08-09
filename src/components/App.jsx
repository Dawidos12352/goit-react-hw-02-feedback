import React, { Component } from 'react';
import FeedbackOptions from "./FeedbackOptions/feedbackOptions"
import Statistics from "./Statistics/statistics"
import Section from "./Section/section";
import Notification from "./Notification/notification";

 export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalCount = this.countTotalFeedback();

    return Math.round((this.state.good * 100) / totalCount);
  }

  handleFeedback(type) {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  }

  render() {
    const {
      handleFeedback,
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = state;

    const totalStatistic = countTotalFeedback.call(this);
    const positivePercentage = countPositiveFeedbackPercentage.call(this);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            handleFeedback={handleFeedback.bind(this)} 
          />
        </Section>

        <Section title="Statistics">
          {totalStatistic ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalStatistic}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;