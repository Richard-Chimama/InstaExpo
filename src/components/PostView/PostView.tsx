import React from 'react';
import { postProps } from '../../types';
import IonIcons from '@expo/vector-icons/Ionicons';
import * as S from './styled';
import Avatar from '../Avatar';
import PostText from '../PostText';
import Likes from '../Likes';
import Spacer from '../Spacer';
import Commments from '../Comments';
import { useSelector } from 'react-redux';
import { RootState } from '../../ReduxStore';
import Theme from '../../theme';

const PostView = (post: postProps) => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <S.Container>
      <Avatar id={post.item.user_id} time={post.item.created_at} />
      <PostText text={post.item.text} />
      <S.ImagePost source={{ uri: post.item.image }} />
      <S.PostOptions>
        <S.ThreeIcons>
          <Likes postId={post.item.id} />
          <Commments postId={post.item.id} onPress={post.showModal} />
          <IonIcons
            name="send-outline"
            color={theme.isDark ? Theme.darkTextColor : Theme.lightTextColor}
            size={23}
          />
        </S.ThreeIcons>
        <S.BookMark>
          <IonIcons
            name="bookmark-outline"
            color={theme.isDark ? Theme.darkTextColor : Theme.lightTextColor}
            size={23}
          />
        </S.BookMark>
      </S.PostOptions>
      <Spacer />
    </S.Container>
  );
};

export default PostView;
