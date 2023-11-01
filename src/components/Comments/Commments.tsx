import React, {useEffect, useState} from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";

interface props{
      comments: any
      onPress?: ()=> void
}

const Commments: React.FC<props> = ({comments, onPress}) => {
      const [numLikes, setNumLikes] = useState(0);
    
      useEffect(() => {
        if (comments.length > 0) {
          setNumLikes(comments.length);
        } else {
          setNumLikes(0);
        }
      }, []);
  return (
    <S.Container onPress={onPress}>
      <S.Info>{numLikes > 0 && numLikes}</S.Info>
      <IonIcons name="chatbubble-outline" size={25} />
    </S.Container>
  );
};

export default Commments;
