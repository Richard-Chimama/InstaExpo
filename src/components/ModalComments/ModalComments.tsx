import React, { useEffect, useState } from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";
import { commentProp, postProp } from "../../types";
import Profile from "../Profile";
import { apiEndPoint, useAppContext } from "../../auth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../ReduxStore";
import CommentAvatar from "./CommentAvatar";
import formatTimestamp from "../../Utility/Functions/FormatTimeStamp";

interface props {
  showModal: () => void;
  postId: string
}

const ModalComments = (props: props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const {state} = useAppContext()
  const posts = useSelector((state:RootState)=>state.posts)

  const post = posts.value.find((item)=> item.id === props.postId)

  const handleSubmit = ()=>{
    if(state.credentials){
      const data = {
        id: state.credentials.id,
        comment: inputValue
  }
  console.log(JSON.stringify(data));
  sendComment()
    }
  }
  const sendComment = async()=>{
   
    if(state.credentials && inputValue.trim() !== ""){
      const data = {
            id: state.credentials.id,
            comment: inputValue
      }
      const res = await fetch(apiEndPoint + 'post/comment/'+props.postId,{
        method:'PUT',
        headers:{ 
          'Content-Type': 'application/json',
          Authorization: state.credentials.token
        },
        body: JSON.stringify(data)
      })

      if(res.ok){
        const com = await res.json()
        console.log(com)
      }else{
        console.log('something went wrong!!!')
        console.log(res)
      }

    }
  }

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
          <S.HeaderSection
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              borderStyle: "solid",
            }}
          >
            <S.HeaderText>Comments</S.HeaderText>
          </S.HeaderSection>
          <S.CommentSection>
            {(post && post.comment )? (
              <>
              {
                post.comment.map((item:commentProp) => <S.CommentsSection key={item.id}>
                    <S.CommentHeader>
                      <S.CommentAvatar>
                        <CommentAvatar userId={item.user_id} />
                      </S.CommentAvatar>
                      <S.CommentTime>{formatTimestamp(item.created_at)}</S.CommentTime>
                    </S.CommentHeader>
                    <S.CommentBody>
                      <S.commenttext>{item.comment}</S.commenttext>
                    </S.CommentBody>
                </S.CommentsSection>)
              }
              </>
            ):(
              <S.NoComment>
                
                <S.NoCommentText>
                  No comments yet! Be the first to comment!
                </S.NoCommentText>
              </S.NoComment>
              
            )}
          </S.CommentSection>
          <S.InputSection>
            <Profile />
            <S.TextInput
              placeholder="enter a comment"
              onChangeText={setInputValue}
              value={inputValue}
              multiline={true}
            />
            <IonIcons name="ios-send" size={40} color="blue" onPress={handleSubmit} />
          </S.InputSection>
        </S.SubContent>
      </S.Content>
    </S.Container>
  );
};

export default ModalComments;
