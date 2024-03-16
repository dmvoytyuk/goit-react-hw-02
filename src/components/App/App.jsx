import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const initFeedback = {
	good: 0,
	neutral: 0,
	bad: 0,
};

function App() {
	const [feedbacks, setFeedback] = useState(() => {
		if (localStorage.getItem("feedbacks")) {
			return JSON.parse(localStorage.getItem("feedbacks"));
		} else {
			return initFeedback;
		}
	});

	useEffect(() => {
		localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
	}, [feedbacks]);

	const totalFeedback = Object.values(feedbacks).reduce(
		(sum, feedback) => sum + feedback,
		0,
	);

	return (
		<>
			<Description />
			<Options
				handleClicks={setFeedback}
				feedbacks={feedbacks}
				totalFeedback={totalFeedback}
			/>
			{totalFeedback && totalFeedback > 0 ? (
				<Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />
			) : (
				<Notification />
			)}
		</>
	);
}

export default App;
