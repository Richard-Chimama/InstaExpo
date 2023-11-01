import 'react-native-gesture-handler';
import {CredentialProvider} from './src/auth'
import React from 'react';
import Main from './src/Main'

export default function App() {
  
  return (
    <CredentialProvider>
        <Main />
    </CredentialProvider>
  );
}

