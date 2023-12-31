import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { apiEndPoint, useAppContext } from '@auth';
import {FormatTimeStamp} from '@utility/Functions/';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as S from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxStore';
import Theme from '@theme';

interface prop {
  id: string;
  time: Date;
}

const tempUrl =
  'https://storage.googleapis.com/g3-imageshare-backend.appspot.com/5WCLrJP69ZX9u6D89XorgKsRa5C3/photo?GoogleAccessId=firebase-adminsdk-zewxn%40g3-imageshare-backend.iam.gserviceaccount.com&Expires=16447014000&Signature=TNaWEtDpcNq96cjl5PY2Eu0R2d%2F9ds8gzG6O%2BMjfdR9JdHQbreNfdU8020fgD2LcurnjjD3iMRROO6KWRucevoDIKHxD5lrIDPDStb1cIc2yODakz3BtbD6Po%2B%2BWdnb5VgMAanPxw%2FMQmFX4te45evLoxC0cq9feDlWpYtJWKLWKlGnXP2XeZ8QDLmtBFA%2BKkexkYdJ%2B0h%2BqrIaLXexjd6G6yW8PTFEkml7s5Madh4qbc6OZT1SThiftIn2WlRE5vjqpsSUR0liWLOIPKV4OYVKhO5BNL5dSv3miR0P70Hv%2B77GzT87u5H9n1%2FkVOYtRgdy4EzYYDUtxECrGpVD%2BlA%3D%3D';

const Avatar: React.FC<prop> = ({ id, time }) => {
  const { state } = useAppContext();
  const theme = useSelector((state: RootState) => state.theme);
  const [mode, setMode] = useState<boolean>(theme.isDark);
  const [data, setUserData] = React.useState<any>(null);

  useEffect(() => {}, []);

  React.useEffect(() => {
    const user = async () => {
      try {
        const response = await fetch(apiEndPoint + 'user/' + id, {
          method: 'GET',
          headers: {
            authorization: state.credentials ? state.credentials.token : '',
          },
        });

        if (response.ok) {
          const d = await response.json();
          setUserData(d);
        } else console.log('error happen code: ' + response.status);
      } catch (error) {
        console.log(error);
      }
    };

    user();
  }, []);

  let pictureUrl;
  if (data) {
    pictureUrl =
      data.customClaims.picture == undefined
        ? tempUrl
        : data.customClaims.picture;
  }

  return (
    <S.Container>
      {data && (
        <S.Content>
          <S.UserInfo>
            <S.ImageContainer>
              <S.UserImage
                source={{ uri: pictureUrl }}
                alt="user profile"
                resizeMode="contain"
              />
            </S.ImageContainer>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: theme.isDark
                    ? Theme.darkTextColor
                    : Theme.lightTextColor,
                }}
              >
                {data.customClaims.username}
              </Text>
              <Text
                style={{
                  color: theme.isDark
                    ? Theme.darkTextColor
                    : Theme.lightTextColor,
                }}
              >
                {FormatTimeStamp(time)}
              </Text>
            </View>
          </S.UserInfo>
          <View>
            <FontAwesome
              name="ellipsis-v"
              size={25}
              color={theme.isDark ? Theme.darkTextColor : Theme.lightTextColor}
            />
          </View>
        </S.Content>
      )}
    </S.Container>
  );
};

export default Avatar;
