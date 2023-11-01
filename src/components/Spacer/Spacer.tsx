import React from "react";
import * as S from "./styled";

interface props {
  width?: string;
  height?: string;
}

const Spacer: React.FC<props> = ({ width, height }) => {
  return <S.Container width={width} height={height}></S.Container>;
};

export default Spacer;
