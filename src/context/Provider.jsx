import Context from "./Context";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { fetchApi } from "../services/fetchApi";


function Provider({ children }) {
  const [computers, setComputers] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      const data = await fetchApi();

      console.log(data)
      setComputers(data.results.slice(0, 10));
    };

    getApi();
  }, []);

  const contextValue = {
    computers,
    setComputers
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
