import React, { useEffect, useState } from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";
import { postProp } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore";

interface props {
  postId: string;
  onPress?: (id:string) => void;
}

const Commments: React.FC<props> = ({ postId, onPress }) => {
  const [numLikes, setNumLikes] = useState(0);
  const posts = useSelector((state:RootState)=> state.posts)

  const post = posts.value.find((item)=> item.id === postId)

  useEffect(() => {
    if (post && post.comment && post.comment.length > 0) {
      setNumLikes(post.comment.length );
    } else {
      setNumLikes(0);
    }
  }, []);

  const handlePress = ()=>{
    if(onPress){
      onPress(postId)
    }
  }

  return (
    <S.Container onPress={handlePress}>
      <S.Info>{numLikes > 0 && numLikes}</S.Info>
      <IonIcons name="chatbubble-outline" size={25} />
    </S.Container>
  );
};

export default Commments;
