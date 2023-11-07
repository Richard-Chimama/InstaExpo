import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAppContext } from './auth';
import RouteAuth from './RouteAuth';
import RouteApp from './RouteApp';

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
      <QueryClientProvider client={queryClient}>
        {handleAuthenticate()}
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default Main;
