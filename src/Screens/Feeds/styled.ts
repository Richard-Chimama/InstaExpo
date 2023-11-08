import { ReactNode } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Theme from '@theme';

type ContainerProps = {
  mode: boolean;
  insets: EdgeInsets;
  children?: ReactNode;
};

export const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  padding-top: ${({insets})=> insets.top +'px'};
  padding-bottom: ${({insets})=> insets.bottom+'px'};
  padding-left: ${({insets})=> insets.left+'px'};
  padding-right: ${({insets})=> insets.right+'px'};
  background: ${(props) =>
    props.mode === true ? Theme.darkBackground : Theme.lightBackground};
`;
