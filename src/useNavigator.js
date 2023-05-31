import { useEffect, useState } from "react";

const useNavigator = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude.toString().substring(0, 5),
          lon: position.coords.longitude.toString().substring(0, 5),
        });
      });
    } else {
      console.log("Geolocation unavailable");
    }
  }, []);

  return location;
};
export default useNavigator;
