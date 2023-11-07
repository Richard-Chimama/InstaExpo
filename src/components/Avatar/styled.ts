import styled from 'styled-components/native';

export const Container = styled.View`
  height: 70px;
  width: 100%;
`;
export const UserImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;
export const ImageContainer = styled.View`
  border-radius: 50%;
  border: 2px solid rgba(100, 100, 100, 0.7);
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
