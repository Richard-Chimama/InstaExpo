import styled from "styled-components/native";

export const Container = styled.Modal`
`

export const Content = styled.View`
      flex: 1;
      justify-content: flex-end;
      background-color: rgba(0,0,0,0.5);
`

export const SubContent = styled.KeyboardAvoidingView`
      position:relative;
      height: 70%;
      background-color: white;
      opacity: 0.7;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      padding-top: 15px;
      padding-left:10px;
      padding-right:10px;
`

export const Word = styled.Text`

`

export const InputSection = styled.View`
      position: absolute;
      bottom: 50px;
      left: 10px;
      right: 10px;

`
export const TextInput = styled.TextInput`
      border: 1px solid black;
      height: 35px;
`
