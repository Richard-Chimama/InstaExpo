import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';
import * as S from './styled';
import { apiEndPoint, useAppContext } from '../../auth';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../ReduxStore';
import { updateLike } from '../../ReduxStore/PostStore';

interface propLike {
  postId: string;
}

const Likes: React.FC<propLike> = ({ postId }) => {
  const { state } = useAppContext();
  const posts = useSelector((state: RootState) => state.posts);
  const Theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const [numLikes, setNumLikes] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const post = posts.value.find((item) => item.id === postId);

  useEffect(() => {
    if (post && post.likes.length > 0) {
      setNumLikes(post.likes.length);
    } else {
      setNumLikes(0);
    }
  }, [isLike]);

  useEffect(() => {
    if (post) {
      const checkUser = post.likes.findIndex(
        (item) => item.user_id === state.credentials?.id,
      );
      if (checkUser != -1) {
        setIsLike(true);
      }
    }
  }, [isLike]);

  const fetchLike = async () => {
    if (state.credentials) {
      const requestOptions = {
        method: 'PUT',
        headers: {
          authorization: state.credentials.token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: state.credentials?.id }),
      };

      try {
        const response = await fetch(
          apiEndPoint + 'post/like/' + postId,
          requestOptions,
        );

        if (response.ok) {
          const responseData = await response.json();
          dispatch(
            updateLike({
              id: postId,
              userId: state.credentials.id,
            }),
          );
          setIsLike(!isLike);
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
      <S.Info mode={Theme.isDark}>{numLikes > 0 && numLikes}</S.Info>
      {isLike ? (
        <IonIcons name="heart" color="red" size={25} />
      ) : (
        <IonIcons name="heart-outline" size={25} />
      )}
    </S.Container>
  );
};

export default Likes;
