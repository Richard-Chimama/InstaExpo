import "react-native-gesture-handler";
import { CredentialProvider } from "./src/auth";
import React from "react";
import Main from "./src/Main";

import { Provider } from "react-redux";
import store from "./src/ReduxStore";

export default function App() {
  return (
    <CredentialProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </CredentialProvider>
  );
}
