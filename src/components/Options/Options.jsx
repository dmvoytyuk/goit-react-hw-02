const Options = ({ feedbacks, updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback(feedbacks) > 0 && <button onClick={()=>updateFeedback("reset")}>Reset</button>}
    </div>
  );
};

export default Options;
