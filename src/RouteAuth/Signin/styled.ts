import styled from 'styled-components/native';

const WIDTH = '75%';

export const InputContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  height: 45px;
  width: ${WIDTH};
  border: 1px solid black;
  border-radius: 8px;
`;
export const UserInput = styled.TextInput`
  height: 40px;
  padding-left: 5px;
`;
export const ForgotPassword = styled.Text`
  color: blue;
  align-self: flex-end;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #228558;
  width: ${WIDTH};
  height: 35px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const LoginText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const SignUpText = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const CreateAccount = styled.Text`
  margin-right: 10px;
`;
