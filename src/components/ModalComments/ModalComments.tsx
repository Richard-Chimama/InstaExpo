import React, { useState, useRef } from 'react';
import IonIcons from '@expo/vector-icons/Ionicons';
import * as S from './styled';
import { commentProp } from '@types';
import Profile from '@components/Profile';
import { apiEndPoint, useAppContext } from '@auth';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reduxStore/index';
import CommentAvatar from './CommentAvatar';
import {FormatTimeStamp} from '@utility/Functions';
import { updateComment } from '@reduxStore/PostStore';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

interface props {
  showModal: () => void;
  postId: string;
}

const ModalComments = (props: props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { state } = useAppContext();
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  const scrollViewRef: React.MutableRefObject<any> = useRef();

  const post = posts.value.find((item) => item.id === props.postId);

  const handleSubmit = () => {
    sendComment();
  };
  const sendComment = async () => {
    if (state.credentials && inputValue.trim() !== '') {
      const data = {
        id: state.credentials.id,
        comment: inputValue,
      };
      const res = await fetch(apiEndPoint + 'post/comment/' + props.postId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: state.credentials.token,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const com = await res.json();
        dispatch(
          updateComment({
            postId: props.postId,
            comments: com.comment,
          }),
        );
        setInputValue('');
      } else {
        console.log('something went wrong!!!');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <S.Container
        transparent={true}
        animationType="slide"
        visible={true}
        onRequestClose={() => false}
      >
        <S.Content>
          <S.TouchableLayer onPress={props.showModal} />
          <S.SubContent behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <S.HeaderSection
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                borderStyle: 'solid',
              }}
            >
              <S.HeaderText>Comments</S.HeaderText>
            </S.HeaderSection>
            <S.CommentSection>
              <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => {
                  scrollViewRef?.current?.scrollToEnd({ animated: true });
                }}
              >
                {post && post.comment ? (
                  <>
                    {post.comment.map((item: commentProp) => (
                      <S.CommentsSection key={item.id}>
                        <S.CommentHeader>
                          <S.CommentAvatar>
                            <CommentAvatar userId={item.user_id} />
                          </S.CommentAvatar>
                          <S.CommentTime>
                            {FormatTimeStamp(item.created_at)}
                          </S.CommentTime>
                        </S.CommentHeader>
                        <S.CommentBody>
                          <S.commenttext>{item.comment}</S.commenttext>
                        </S.CommentBody>
                      </S.CommentsSection>
                    ))}
                  </>
                ) : (
                  <S.NoComment>
                    <S.NoCommentText>
                      No comments yet! Be the first to comment!
                    </S.NoCommentText>
                  </S.NoComment>
                )}
              </ScrollView>
            </S.CommentSection>
            <S.InputSection>
              <Profile />
              <S.TextInput
                placeholder="enter a comment"
                onChangeText={setInputValue}
                value={inputValue}
                multiline={true}
              />
              <IonIcons
                name="ios-send"
                size={40}
                color="blue"
                onPress={handleSubmit}
              />
            </S.InputSection>
          </S.SubContent>
        </S.Content>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default ModalComments;
