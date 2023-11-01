import React from "react";
import * as S from "./styled";

const ModalComments = () => {
  return (
    <S.Container
      transparent={true}
      animationType="slide"
      visible={true}
      onRequestClose={() => false}
    >
      <S.Content>
        <S.SubContent>
          <S.Word>ModalComments</S.Word>
          <S.InputSection>
            <S.TextInput  placeholder="enter a comment" />
          </S.InputSection>
        </S.SubContent>
      </S.Content>
    </S.Container>
  );
};

export default ModalComments;
