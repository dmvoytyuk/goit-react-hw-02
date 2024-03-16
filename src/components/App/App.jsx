import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

function App() {
  /* const feedbacks = {
		good: 0,
		neutral: 0,
		bad: 0,
	}; */

  const [feedbacks, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <>
      <Description />
      <Options handleClicks={setFeedback} feedbacks={feedbacks} />
      <Feedback feedbacks={feedbacks} />
    </>
  );
}

export default App;
