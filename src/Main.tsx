import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAppContext } from '@auth';
import RouteAuth from './RouteAuth';
import RouteApp from '@app';

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
    <SafeAreaProvider>
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        {handleAuthenticate()}
      </QueryClientProvider>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Main;
