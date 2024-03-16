const Feedback = ({ feedbacks }) => {
  const { good, neutral, bad } = feedbacks;
  const total = Object.values(feedbacks).reduce((sum, feedback) => sum + feedback, 0);
	const positvePercentage = total ? Math.round(good/total * 100) : 0;

  return (
    <div>
		{total && total > 0 ? (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positvePercentage}%</li>
      </ul>
			) : ( <p>No feedback yet</p> )} 
    </div>
  );
};

export default Feedback;
