// Define the shape of the state and action objects
export interface CredentialState {
  isAuthenticated: boolean;
  credentials: {
    token: string;
    id: string;
  } | null;
  loading: boolean;
}

export type CredentialAction =
  | { type: "LOGIN"; payload: { token: string; id: string } }
  | { type: "LOGOUT" } | {type: 'SET_LOADING'; payload:{loading: boolean}};



export interface AppContextProps {
  state: CredentialState;
  dispatch: React.Dispatch<CredentialAction>;
}

export type postProps={
  item: postProp
  refetch?: ()=> void
}

export interface postProp{
  image?: string,
  category: string,
  text: string,
  user_id: string,
  created_at: Date,
  comments: any,
  likes: any,
  id: string,
}