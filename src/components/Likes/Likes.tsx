import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";
import { apiEndPoint, useAppContext } from "../../auth";

interface propLike {
  likes: any;
  postId: string;
  refetch?: () => void;
}

const Likes: React.FC<propLike> = ({ likes, postId, refetch }) => {
  const { state } = useAppContext();
  const [numLikes, setNumLikes] = useState(0);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (likes.length > 0) {
      setNumLikes(likes.length);
    } else {
      setNumLikes(0);
    }
  }, [isLike]);

  useEffect(() => {
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].user_id === state.credentials?.id) {
        setIsLike(true);
      }
    }

    
  }, [isLike]);

  const fetchLike = async () => {
    if (state.credentials) {
      const requestOptions = {
        method: "PUT",
        headers: {
          authorization: state.credentials.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: state.credentials?.id }),
      };

      try {
        const response = await fetch(
          apiEndPoint + "post/like/" + postId,
          requestOptions
        );

        if (response.ok) {
          const responseData = await response.json();

          if (refetch) {
            refetch();

            setIsLike(!isLike);
          }
        } else {
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <S.Container onPress={() => fetchLike()}>
      <S.Info>{numLikes > 0 && numLikes}</S.Info>
      {isLike ? (
        <IonIcons name="heart" color="red" size={25} />
      ) : (
        <IonIcons name="heart-outline" size={25} />
      )}
    </S.Container>
  );
};

export default Likes;
