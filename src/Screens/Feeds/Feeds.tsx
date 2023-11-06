import React, { useEffect, useState } from "react";
import { View, Text, RefreshControl, Modal, ActivityIndicator } from "react-native";
import { useAppContext, apiEndPoint } from "../../auth";
import { useQuery } from "@tanstack/react-query";
import { FlashList } from "@shopify/flash-list";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../ReduxStore/PostStore";
import { RootState } from "../../ReduxStore";

import * as S from "./styled";
import PostView from "../../components/PostView/PostView";
import { postProp } from "../../types";
import SortDataByTimeCreated from "../../Utility/Functions/SortData";
import ModalComments from "../../components/ModalComments";
import { addUsers } from "../../ReduxStore/UserStore";

const customFetch = async (token: string | undefined, type: string) => {
  const response = await fetch(apiEndPoint + type, {
    method: "GET",
    headers: {
      authorization: `${token}`,
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch the data");
  }
};

const Feeds = () => {
  const {
    state: { credentials },
    dispatch: tokenDispatch
  } = useAppContext();
  const token = credentials?.token;
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState('');
  
  const dispatch = useDispatch();
  const posts = useSelector((state:RootState)=> state.posts)
  const theme = useSelector((state:RootState)=> state.theme)
  const [mode, setMode] = useState<boolean>(theme.isDark)
  

  const { data, error, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: () => customFetch(token, 'post'),
  });

  const {data:listOfUsers, error: usersIsError, isPending:usersIsPending} =useQuery({
    queryKey: ["users"],
    queryFn: ()=>customFetch(token, 'user'),
  })

  useEffect(() => {
    if (!isPending && !error) {
      dispatch(addPosts(SortDataByTimeCreated({data:data})));
    }
  }, [isPending, error]);

  useEffect(()=>{
    if(!usersIsPending && !usersIsError){
      dispatch(addUsers(listOfUsers))
    }
  },[usersIsError,usersIsPending])

  useEffect(()=>{
    setMode(theme.isDark)
  },[theme.isDark])


  const onRefresh = () => {
    setRefreshing(true);
    customFetch(token, 'post')
      .then((data) => {
        dispatch(addPosts(SortDataByTimeCreated({data:data})));
        setRefreshing(false);
      })
      .catch(() => setRefreshing(false));
  };

  const handleModel = () => {
    setModalVisible(!modalVisible);
  };

  const handleModalData = (postId:string) => {
    setModalData(postId);
    handleModel();
  }



  return (
    <S.Container mode={mode}>
      {isPending && <ActivityIndicator size='large' />}
      {error && <Text>An Error happened!!!</Text>}
      {!isPending && !error && posts && (
        <FlashList
          data={posts.value}
          renderItem={({ item }: { item: postProp }) => (
            <PostView
              key={item.id}
              item={item}
              refetch={onRefresh}
              showModal={handleModalData}
            />
          )}
          estimatedItemSize={200}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
      {modalVisible && (
        <ModalComments showModal={handleModel} postId={modalData} />
      )}
    </S.Container>
  );
};

export default Feeds;
