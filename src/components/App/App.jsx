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

  const updateFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setFeedback({ ...feedbacks, good: feedbacks.good + 1 });
        break;
      case "neutral":
        setFeedback({ ...feedbacks, neutral: feedbacks.neutral + 1 });
        break;
      case "bad":
        setFeedback({ ...feedbacks, bad: feedbacks.bad + 1 });
        break;
      case "reset":
        setFeedback({ ...feedbacks, good: 0, neutral: 0, bad: 0 });
        break;

      default:
        throw new Error("feedback type not found");
    }
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = (feedbacks) => {
    return Object.values(feedbacks).reduce(
      (sum, feedback) => sum + feedback,
      0,
    );
  };

  const positiveFeedbackPercentage = (feedbacks, totalFeedback) => {
    return totalFeedback > 0
      ? Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100)
      : 0;
  };

  return (
    <>
      <Description />
      <Options
        feedbacks={feedbacks}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
      />
      {totalFeedback(feedbacks) > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
