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
      background-color: white;
      height: 80%;
      opacity: 0.88;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      padding-top: 15px;
      padding-left:10px;
      padding-right:10px;
`

export const CommentSection = styled.View`
      height: 78%;
      overflow: scroll;
`

export const InputSection = styled.View`
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      left: 10px;
      right: 10px;
      z-index: 999;
      background-color: white;
      padding-top: 8px;

`
export const TextInput = styled.TextInput`
      border: 1px solid rgba(0,0,0,0.6);
      border-radius: 8px;
      padding-left: 5px;
      font-size: 13px;
      height: 40px;
      width:73%;
`
export const HeaderSection = styled.View`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 100%;
      margin-bottom: 10px;
`
export const HeaderText = styled.Text`
      font-size: 16px;
      font-weight: bold;
`

export const NoComment = styled.View`
      flex: 1;
      justify-content: center;
      align-items: center;
`
export const NoCommentText = styled.Text`
      font-size: 13px;
`
export const CommentsSection = styled.View`
      padding: 10px;
      background-color: lightgrey;
      margin-bottom: 5px;
      border-radius: 8px;
`
export const CommentHeader = styled.View`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
`
export const CommentBody = styled.View`
      margin-left: 65px;
      margin-top: -22px;
`
export const commenttext = styled.Text``
export const CommentTime = styled.Text`
      font-size: 13px;
      font-style: italic;
`
export const CommentAvatar = styled.View`
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: white;
`