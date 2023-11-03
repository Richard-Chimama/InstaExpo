import React, { useEffect, useState } from "react";
import { View, Text, RefreshControl, Modal } from "react-native";
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

const fetchPosts = async (token: string | undefined) => {
  const response = await fetch(apiEndPoint + "post", {
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
  } = useAppContext();
  const token = credentials?.token;
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState('');

  const dispatch = useDispatch();
  const posts = useSelector((state:RootState)=> state.posts)
  

  const { data, error, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(token),
  });

  useEffect(() => {
    if (!isPending && !error) {
      dispatch(addPosts(SortDataByTimeCreated({data:data})));
    }
  }, [isPending, error]);


  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts(token)
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
    <S.Container style={{ flex: 1 }}>
      {isPending && <Text>Loading...</Text>}
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
