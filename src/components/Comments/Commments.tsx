import React, { useEffect, useState } from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";
import { postProp } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore";
import theme from "../../theme";

interface props {
  postId: string;
  onPress?: (id:string) => void;
}

const Commments: React.FC<props> = ({ postId, onPress }) => {
  const [numLikes, setNumLikes] = useState(0);
  const posts = useSelector((state:RootState)=> state.posts)
  const Theme = useSelector((state:RootState)=> state.theme)

  const post = posts.value.find((item)=> item.id === postId)

  const handlePress = ()=>{
    if(onPress){
      onPress(postId)
    }
  }

  useEffect(() => {
    if (post && post.comment && post.comment.length > 0) {
      setNumLikes(post.comment.length );
    } else {
      setNumLikes(0);
    }
  }, [post, numLikes, handlePress]);

 

  return (
    <S.Container onPress={handlePress}>
      <S.Info mode={Theme.isDark}>{numLikes > 0 && numLikes}</S.Info>
      <IonIcons 
      name="chatbubble-outline" 
      size={25}
      color={Theme.isDark? theme.darkTextColor: theme.lightTextColor}
       />
    </S.Container>
  );
};

export default Commments;
