const Options = ({ handleClicks, feedbacks, totalFeedback }) => {
	const updateFeedback = (feedback) => {
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
	const resetFeedback = () => {
		handleClicks({...feedbacks, good: 0, neutral: 0, bad: 0});
	}
	return (
		<div>
			<button onClick={() => updateFeedback("good")}>Good</button>
			<button onClick={() => updateFeedback("neutral")}>Neutral</button>
			<button onClick={() => updateFeedback("bad")}>Bad</button>
			{totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
		</div>
	);
};

export default Options;
