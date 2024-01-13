import React, { createContext, useReducer, useContext } from 'react';

const actionTypes = {
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT',
};

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { user: null });

  const setUser = (user) => {
    dispatch({ type: actionTypes.SET_USER, payload: user });
  };

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  const contextValue = {
    user: state.user,
    setUser,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser, actionTypes };
