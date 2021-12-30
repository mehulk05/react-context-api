import React, { createContext, useState } from "react";

const DbContext = createContext();

const DbProvider = (props) => {
  const [requestStartDbObj, setRequestStartDbObj] = useState({});

  const { children } = props;

  return (
    <DbContext.Provider
      value={{
        requestStartDbObj,
        setRequestStartDbObj,
      }}
    >
      {children}
    </DbContext.Provider>
  );
};

export default DbContext;

export { DbProvider };