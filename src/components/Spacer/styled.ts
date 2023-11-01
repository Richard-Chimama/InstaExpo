import { styled } from "styled-components/native";

export const Container = styled.View<any>`
      width: ${({width})=> width ? width : '100%'};
      height: ${({height})=> height ? height : '1px'};
      background-color: rgba(0,0,0,0.2);
      margin: 10px 0 25px 0;
`