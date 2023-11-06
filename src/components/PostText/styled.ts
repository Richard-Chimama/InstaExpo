import { ReactNode } from "react";
import { styled } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      `
type PostTextProps={
      mode: boolean,
      children?: ReactNode
}

export const PostText = styled.Text<PostTextProps>`
      font-size: 15px;
      color: ${(props)=> props.mode ? theme.darkTextColor: theme.lightTextColor};
`

export const OptionRead = styled.Text<PostTextProps>`
      color: ${(props)=> props.mode ? theme.accentColor: theme.lightAccentColor};
      font-size: 12px;
`
