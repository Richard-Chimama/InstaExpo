import { ReactNode } from 'react';
import styled from 'styled-components/native';
import Theme from '../../theme';

type ContainerProps = {
  mode: boolean;
  children?: ReactNode;
};

export const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  background: ${(props) =>
    props.mode === true ? Theme.darkBackground : Theme.lightBackground};
`;
