import React from "react";
import { postProps } from "../../types";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";
import Avatar from "../Avatar";
import PostText from "../PostText";
import Likes from "../Likes";
import Spacer from "../Spacer";
import Commments from "../Comments";

const PostView = (post: postProps) => {
  return (
    <S.Container>
      <Avatar id={post.item.user_id} time={post.item.created_at} />
      <PostText text={post.item.text} />
      <S.ImagePost source={{ uri: post.item.image }} />
      <S.PostOptions>
        <S.ThreeIcons>
          <Likes
            likes={post.item.likes}
            postId={post.item.id}
            refetch={post.refetch}
          />
          <Commments comments={post.item.comments} />
          <IonIcons name="send-outline" size={23} />
        </S.ThreeIcons>
        <S.BookMark>
          <IonIcons name="bookmark-outline" size={23} />
        </S.BookMark>
      </S.PostOptions>
      <Spacer />
    </S.Container>
  );
};

export default PostView;
