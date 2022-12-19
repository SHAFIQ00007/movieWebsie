import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();

const API = `https://www.omdbapi.com/?apikey=668abea5&s`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [userSearch, setUserSearch] = useState("Pirates of the Caribbean");
  const [singleMovie, setSingleMovie] = useState({ search: true });

  const getApi = async (api) => {
    const response = await axios.get(api);
    console.log(response.data);
    const { data } = response;
    if (data.Response === "True") {
      setIsError({
        show: false,
        msg: data.Error,
      });
      setMovie(data.Search);
      setIsLoading(false);
    } else {
      setIsError({
        show: true,
        msg: data.Error,
      });
      setSingleMovie({});
    }
  };
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getApi(`${API}&s=${userSearch}`);
    }, 200);
    return () => clearTimeout(timeOut);
  }, [userSearch]);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        movie,
        userSearch,
        setUserSearch,
        singleMovie,
        setSingleMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
