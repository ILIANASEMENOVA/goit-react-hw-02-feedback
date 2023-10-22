export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  const buttonsList = keys.map(key => (
    <li key={key}>
      <button type="button" onClick={() => onLeaveFeedback(key)}>
        {key}
      </button>
    </li>
  ));
  return (
    <>
      <div>
        <ul>{buttonsList}</ul>
      </div>
    </>
  );
};
