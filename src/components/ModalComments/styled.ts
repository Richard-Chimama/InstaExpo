import styled from "styled-components/native";

export const Container = styled.Modal`
`

export const Content = styled.View`
      flex: 1;
      justify-content: flex-end;
      background-color: rgba(0,0,0,0.5);
`
export const TouchableLayer = styled.TouchableOpacity`
      flex: 1;
`

export const SubContent = styled.KeyboardAvoidingView`
      position:relative;
      height: 70%;
      background-color: white;
      opacity: 0.8;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      padding-top: 15px;
      padding-left:10px;
      padding-right:10px;
`

export const CommentSection = styled.View`
      height: 85%;
      background-color: gray;
`

export const InputSection = styled.View`
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      bottom: 50px;
      left: 10px;
      right: 10px;

`
export const TextInput = styled.TextInput`
      border: 1px solid rgba(0,0,0,0.6);
      border-radius: 8px;
      padding-left: 5px;
      height: 40px;
      width:85%;
`
