import fahrenheitToCelicus from "../../utils";
import "./current.css";
const Current = ({
  imgUrl,
  temp,
  city,
  status,
  wind,
  max,
  min,
  pressure,
  humidity,
}) => {
  return (
    <div className="current-container">
      <img
        className="current-image"
        src="https://raw.githubusercontent.com/HoseinSadonasl/WeatherApp-drizzle/master/Images/clouds.png"
        alt="image"
      />
      <div className="details-wrapper">
        <a className="temp">{fahrenheitToCelicus(temp)}</a>
        <a className="city">{city}</a>
        <div className="status-wrapper">
          <div className="div-col">
            <a className="status">{status}</a>
            <a className="wind">{"Wind: " + wind + "Km/h"}</a>
          </div>
          <div className="div-col">
            <a className="max">{"Max: " + fahrenheitToCelicus(max)}</a>
            <a className="min">{"Min: " + fahrenheitToCelicus(min)}</a>
          </div>
          <div className="div-col">
            <a className="pressure">{"Pressure: " + pressure}</a>
            <a className="humidity">{"Humidity: " + humidity}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
