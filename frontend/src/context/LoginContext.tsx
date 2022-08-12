import React, { useState } from 'react';

interface ILoginContext {
	token: string;
	login?: (t: string) => void;
}

const defaultState = {
	token: "",
};

export const LoginContext = React.createContext<ILoginContext>(defaultState);

export const LoginContextProvider = ({children}: any) => {
  const [token, setToken] = useState(defaultState.token);

  const login = (t: string) => {
    setToken(t);
  };

  return (
    <LoginContext.Provider
      value={{
        token,
        login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
