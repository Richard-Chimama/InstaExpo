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
  | { type: 'LOGIN'; payload: { token: string; id: string } }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: { loading: boolean } };

export interface AppContextProps {
  state: CredentialState;
  dispatch: React.Dispatch<CredentialAction>;
}

export type postProps = {
  item: postProp;
  refetch?: () => void;
  showModal?: (postId: string) => void;
};

export interface postProp {
  image?: string;
  category: string;
  text: string;
  user_id: string;
  created_at: Date;
  comments: any;
  comment?: any;
  likes: Likes[];
  id: string;
}

export interface commentProp {
  id: string;
  user_id: string;
  comment: string;
  created_at: Date;
  updated_at: Date;
}

export interface Likes {
  id: string;
  user_id: string;
}

export interface usersProp {
  uid: string;
  email: string;
  customClaims?: {
    username: string;
    phone_number: string;
    address: string;
    picture: string;
  };
}
