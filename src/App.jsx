import "./App.css";
import Nav from "./components/nav/nav";
import SearchBar from "./components/searchBar/searchBar";
import { useEffect, useState } from "react";
import Current from "./components/current/current";
import ClipLoader from "react-spinners/ClipLoader";
import useAxios from "./useAxios";
import useNavigator from "./useNavigator";

function App() {
  const [url, setUrl] = useState(
    "weather?q=London&appid=5fc692ebf21d511ad296b29df090f4a3"
  );
  const [loading, , response] = useAxios(url);

  new Promise((resolve) => {
    const location = useNavigator();
    resolve(location);
  }).then((resolve) => {
    setUrl(
      `onecall?lat=${resolve.lat}&lon=${resolve.lon}&exclude=daily&appid=5fc692ebf21d511ad296b29df090f4a3`
    );
    console.log(response);
  });

  const handleCurrentData = () => {};

  // console.log(response);
  // const api = async () => {
  //   const response = await axios.get();
  //   setCurrentData(response.data);
  // };

  // useEffect(() => {
  //   api();
  // }, []);

  const renderData = () => {
    if (!loading) {
      return <div className="1">LOADING</div>;
    }
    return <div className="1">{response}</div>;

    // if (currentData != null) {
    //   let status = "";
    //   currentData.weather?.map((item) => {
    //     status = item?.main;
    //   });
    //   return (
    //     <Current
    //       city={currentData.name}
    //       temp={currentData.main?.temp}
    //       humidity={currentData.main?.humidity}
    //       max={currentData.main?.temp_max}
    //       min={currentData.main?.temp_min}
    //       pressure={currentData.main?.pressure}
    //       status={status}
    //       wind={currentData.wind?.speed}
    //     />
    //   );
    // } else {
    //   return (
    //     <ClipLoader
    //       color={color}
    //       loading={loading}
    //       cssOverride={override}
    //       size={150}
    //       aria-label="Loading Spinner"
    //       data-testid="loader"
    //     />
    //   );
    // }
  };

  return (
    <div className="wrapper">
      <Nav SearchBar={<SearchBar />} />
      {renderData()}
      {/* <Hourly /> */}
    </div>
  );
}

export default App;
