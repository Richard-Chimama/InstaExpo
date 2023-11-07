import { ReactNode } from 'react';
import { styled } from 'styled-components/native';
import theme from '../../theme';

type SpaceProp = {
  width?: string;
  height?: string;
  mode: boolean;
  children?: ReactNode;
};

export const Container = styled.View<SpaceProp>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '1px')};
  background-color: ${({ mode }) =>
    mode ? theme.darkTextColor : theme.lightTextColor};
  margin: 10px 0 25px 0;
  opacity: 0.3;
`;
