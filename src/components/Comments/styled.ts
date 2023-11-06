import { ReactNode } from "react";
import { styled } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TouchableOpacity`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
`
type InfoProp={
      mode: boolean,
      children: ReactNode
}

export const Info = styled.Text<InfoProp>`
      font-size: 20px;
      color: ${props => props.mode ? theme.darkTextColor : theme.lightTextColor} ;
`