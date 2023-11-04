import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore";
import { usersProp } from "../../types";

interface prop {
  userId?: string;
}

const CommentAvatar: React.FC<prop> = ({ userId }) => {
  const [data, setUserData] = useState<usersProp>();

  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (userId) {
      const user = users.value.find((user: usersProp) => user.uid === userId);
      if (user) {
        setUserData(user);
      }
    }
  }, []);

  let pictureUrl;
  if (data) {
    pictureUrl =
      data.customClaims?.picture == undefined ? "" : data.customClaims.picture;
  }

  return (
    <View style={{flexDirection:'row', gap:10}}>
      <Image
        source={{ uri: pictureUrl }}
        alt="user profile"
        resizeMode="contain"
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
        }}
      />
      <Text style={{fontSize: 17, fontWeight: 'bold'}}>{data?.customClaims?.username}</Text>
    </View>
  );
};

export default CommentAvatar;
