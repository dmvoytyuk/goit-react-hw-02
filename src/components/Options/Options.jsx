const Options = ({ handleClicks, feedbacks }) => {
	const updateFeedback = (feedback) => {
		console.log(feedback)
		switch (feedback) {
			case "good":
				handleClicks({ ...feedbacks, good: feedbacks.good + 1 });
				break;
			case "neutral":
				handleClicks({ ...feedbacks, neutral: feedbacks.neutral + 1 });
				break;
			case "bad":
				handleClicks({ ...feedbacks, bad: feedbacks.bad + 1 });
				break;
			default:
				throw new Error("feedback type not found");
		}
	};
	return (
		<div>
			<button onClick={() => updateFeedback("good")}>Good</button>
			<button onClick={() => updateFeedback("neutral")}>Neutral</button>
			<button onClick={() => updateFeedback("bad")}>Bad</button>
			{/* <button onClick={resetFeedbacks}>Reset</button> */}
		</div>
	);
};

export default Options;
