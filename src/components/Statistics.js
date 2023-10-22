export const Statistics = ({ stats, total, positivePercentage }) => {
  const keys = Object.keys(stats);
  const statisticsList = keys.map(key => (
    <li key={key}>
      {key}: {stats[key]}
    </li>
  ));

  return (
    <>
      <div>
        <ul>{statisticsList}</ul>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </div>
    </>
  );
};
