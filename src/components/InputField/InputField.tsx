import React from 'react';
import { Text, TextInput, View } from 'react-native';
import * as S from './styled'; // Assuming S contains your styled components

interface InputFieldProps {
  label: string;
  placeholder: string;
  onChangeText: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  onChangeText,
}) => {
  return (
    <S.InputContainer>
      <Text>{label}</Text>
      <S.UserInput placeholder={placeholder} onChangeText={onChangeText} />
    </S.InputContainer>
  );
};

export default InputField;
