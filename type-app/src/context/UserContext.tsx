import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = (props: any) => {
  // Initial values are obtained from the props
  const {
    user,
    children
  } = props;

  // Use State to keep the values
  const [usertoken, setUser] = useState(user);

  useEffect(() => {
      
  });

  // Make the context object:
  const usersContext = {
    usertoken,
    setUser
  };

  // pass the value in provider and return
  return <Context.Provider value={usersContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  user: PropTypes.string
};

Provider.defaultProps = {
  user: 'Guest'
};