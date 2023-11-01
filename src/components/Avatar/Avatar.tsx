import React from "react";
import { View, Text, Image } from "react-native";
import { apiEndPoint, useAppContext } from "../../auth";
import formatTimestamp from "../../Utility/Functions/FormatTimeStamp";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import * as S from './styled'

interface prop {
  id: string,
  time: Date
}

const Avatar: React.FC<prop> = ({ id, time }) => {
  const { state } = useAppContext();
  const [data, setUserData] = React.useState<any>(null);

  React.useEffect(() => {
      const user = async () => {
            try {
              const response = await fetch(apiEndPoint + "user/" + id, {
                method: "GET",
                headers: {
                  authorization: state.credentials ? state.credentials.token : "",
                },
              });
        
              if (response.ok) {
                const d = await response.json();
                setUserData(d);
              }else(
                  console.log('error happen code: '+ response.status)
              )
            } catch (error) {
              console.log(error);
            }
          };

      user();
  },[]);
  

  let pictureUrl;
  if (data) {
    pictureUrl =
      data.customClaims.picture == undefined ? "" : data.customClaims.picture;
  }
  
  return (
    <S.Container >
      {data && (
        <S.Content>
          <S.UserInfo>
            <S.UserImage source={{ uri:pictureUrl }} alt="user profile" resizeMode="contain" />
            <View>
              <Text style={{fontWeight:'bold', fontSize:18}}>{data.customClaims.username}</Text>
              <Text>{formatTimestamp(time)}</Text>
            </View>
          </S.UserInfo>
          <View>
            <FontAwesome name="ellipsis-v" size={25} />
          </View>
        </S.Content>
      )}
    </S.Container>
  );
};

export default Avatar;
