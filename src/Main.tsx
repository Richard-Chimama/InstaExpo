import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAppContext } from "./auth";
import RouteAuth from "./RouteAuth";
import RouteApp from "./RouteApp";

import { Provider } from "react-redux";
import store from "./ReduxStore";

const queryClient = new QueryClient();

const Main = () => {
  const { state } = useAppContext();
  const handleAuthenticate = () => {
    if (state.isAuthenticated) {
      return <RouteApp />;
    } else {
      return <RouteAuth />;
    }
  };
  return (
    <NavigationContainer>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {handleAuthenticate()}
        </QueryClientProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default Main;
