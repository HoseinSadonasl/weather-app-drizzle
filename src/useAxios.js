import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://api.openweathermap.org/data/2.5/";

const axiosInstance = axios.create({
  baseURL: baseURL,
});
const useAxios = (axiosParams) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  // console.log("Url " + baseURL + axiosParams);

  const fetchData = async () => {
    try {
      const result = await axiosInstance.get(axiosParams);
      setResponse(result.data);
      // console.log("response " + result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [loading, error, response];
};

export default useAxios;
