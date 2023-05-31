const Hourly = ({ Hourly }) => {
  const handleHourlyItems = () => {
    Hourly.map((item) => {
      return (
        <div className="item">
          <a className="status">{item}</a>
          <a className="temp">{item}</a>
          <a className="time">{item}</a>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <ol className="list">{handleHourlyItems()}</ol>
    </div>
  );
};

export default Hourly;
