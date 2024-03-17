const Feedback = ({ feedbacks, totalFeedback, positiveFeedbackPercentage}) => {


  return (
    <div>
      <ul>
        <li>Good: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        <li>Total: {totalFeedback(feedbacks)}</li>
        <li>Positive: {positiveFeedbackPercentage(feedbacks, totalFeedback(feedbacks))}%</li>
      </ul>
    </div>
)
}

export default Feedback;
