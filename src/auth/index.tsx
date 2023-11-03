import React, { createContext, useReducer, useContext, useEffect, ReactNode } from 'react';
import { AppContextProps, CredentialAction, CredentialState } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingComponent from '../components/LoadingComponent';


// Initial state
 const initialState: CredentialState = {
  isAuthenticated: false,
  credentials: null,
  loading:true,
};

const credentialReducer = (state: CredentialState, action: CredentialAction): CredentialState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        credentials: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        credentials: null,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
};

export const apiEndPoint = 'https://api-4uzdo5gwpq-uc.a.run.app/api/';



export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface CredentialProviderProps {
  children: ReactNode;
}

export const CredentialProvider= (s:CredentialProviderProps) => {
  const [state, dispatch] = useReducer(credentialReducer, initialState);

  useEffect(() => {
    const loadAsync = async () => {
      try{
        const token = await AsyncStorage.getItem('token');
        const id = await AsyncStorage.getItem('id');
        if (token && id) {
          dispatch({
            type: 'LOGIN',
            payload: { token, id },
          });
        }
        dispatch({ type: 'SET_LOADING', payload:{loading:false}}); 
      }catch(error){
        console.log("Error while fetching localData", error);
      }
    }

    loadAsync();
  }, []);

  useEffect(() => {
    console.log(state.isAuthenticated)
    const saveAsync = async () => {
    try{
      if (state.isAuthenticated && state.credentials) {
        await AsyncStorage.setItem('token', state.credentials.token);
        await AsyncStorage.setItem('id', state.credentials.id);
      } else {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('id');
      }
    }catch(error){
      console.log("setting data in localStorage",error)
    }
    };

    saveAsync();
  }, [state.isAuthenticated]);

  return (
      <AppContext.Provider value={{state, dispatch}}>
            {state.loading?<LoadingComponent /> : s.children}
      </AppContext.Provider>
  );
};


export const useAppContext = () => {
      const context = useContext(AppContext);
    
      if (!context) {
        throw new Error('useCredential must be used within a CredentialProvider');
      }
    
      return context;
    };
