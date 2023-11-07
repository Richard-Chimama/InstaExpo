import React from 'react';
import * as S from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../ReduxStore';

interface props {
  width?: string;
  height?: string;
}

const Spacer: React.FC<props> = ({ width, height }) => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <S.Container
      mode={theme.isDark}
      width={width}
      height={height}
    ></S.Container>
  );
};

export default Spacer;
