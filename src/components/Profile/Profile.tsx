import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useAppContext, apiEndPoint } from '@auth';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxStore/index';
import { usersProp } from '@types';

const Profile = () => {
  const { state } = useAppContext();
  const [data, setUserData] = useState<usersProp>();

  useEffect(() => {
    const user = async () => {
      try {
        const response = await fetch(
          apiEndPoint + 'user/' + state.credentials?.id,
          {
            method: 'GET',
            headers: {
              authorization: state.credentials ? state.credentials.token : '',
            },
          },
        );

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
      data.customClaims?.picture == undefined ? '' : data.customClaims.picture;
  }

  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 50,
      }}
    >
      {data ? (
        <Image
          source={{ uri: pictureUrl }}
          alt="user profile"
          resizeMode="contain"
          style={{
            height: 40,
            width: 40,
            borderRadius: 50,
          }}
        />
      ) : (
        <View
          style={{
            height: 42,
            width: 42,
            borderRadius: 50,
            backgroundColor: 'lightgreen',
          }}
        ></View>
      )}
    </View>
  );
};

export default Profile;
