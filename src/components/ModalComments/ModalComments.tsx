import React from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";

interface props{
      showModal: ()=> void
}

const ModalComments = (props: props) => {
  return (
    <S.Container
      transparent={true}
      animationType="slide"
      visible={true}
      onRequestClose={() => false}
    >
      <S.Content>
            <S.TouchableLayer onPress={props.showModal} />
        <S.SubContent>
          <S.CommentSection>
         
            </S.CommentSection>
          <S.InputSection>
            <S.TextInput  placeholder="enter a comment" />
            <IonIcons name="ios-send" size={40} color='blue' />
          </S.InputSection>
        </S.SubContent>
      </S.Content>
    </S.Container>
  );
};

export default ModalComments;
