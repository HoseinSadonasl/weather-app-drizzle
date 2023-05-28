import "./App.css";
import Nav from "./components/nav/nav";
import SearchBar from "./components/searchBar/searchBar";
import { useEffect, useState } from "react";
import axios from "./axios";
import Current from "./components/current/current";

function App() {
  const [data, setData] = useState([]);

  const api = async () => {
    const response = await axios.get(
      "/weather?q=London&appid=5fc692ebf21d511ad296b29df090f4a3"
    );
    setData(response.data);
  };

  useEffect(() => {
    api();
  }, []);

  const renderData = () => {
    let status = "null";
    data.weather?.map((item) => {
      status = item?.main;
    });
    console.log(status);
    if (data != null) {
      return (
        <Current
          city={data.name}
          temp={data.main?.temp}
          humidity={data.main?.humidity}
          max={data.main?.temp_max}
          min={data.main?.temp_min}
          pressure={data.main?.pressure}
          status={status}
          wind={data.wind?.speed}
        />
      );
    }
  };

  return (
    <div className="wrapper">
      <Nav SearchBar={<SearchBar />} />
      {renderData()}
    </div>
  );
}

export default App;
