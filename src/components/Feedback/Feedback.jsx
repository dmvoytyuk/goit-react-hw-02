const Feedback = ({ feedbacks, totalFeedback }) => {
  const { good, neutral, bad } = feedbacks;
	const positvePercentage = totalFeedback ? Math.round(good/totalFeedback * 100) : 0;

  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positvePercentage}%</li>
      </ul>
    </div>
)
}

export default Feedback;
