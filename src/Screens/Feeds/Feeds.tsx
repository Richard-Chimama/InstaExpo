import React, { useEffect, useState } from "react";
import { View, Text, RefreshControl, Modal } from "react-native";
import { useAppContext, apiEndPoint } from "../../auth";
import { useQuery } from "@tanstack/react-query";
import { FlashList } from "@shopify/flash-list";

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
  const [refreshing, setRefreshing] = useState(false)
  const [posts, setPosts ] = useState<any>(null)

  const { data, error, isPending, refetch} = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(token),
  });

  useEffect(() => {
    if (!isPending && !error) {
      setPosts(data)
    }
  }, [isPending, error]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts(token).then((data)=> {
      setPosts(data)
      setRefreshing(false)
      refetch()
    })
    .catch(()=>setRefreshing(false))  
  }


  return (
    <S.Container style={{ flex: 1 }}>
      {isPending && <Text>Loading...</Text>}
      {error && <Text>An Error happened!!!</Text>}
      {(!isPending && !error && posts) && (
        <FlashList
          data={SortDataByTimeCreated({data:posts})}
          renderItem={({ item }: { item: postProp }) => (
            <PostView
              key={item.id}
              item={item}
              refetch={onRefresh}
            />
          )}
          estimatedItemSize={100}
          keyExtractor={(item)=> item.id}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
       
      )}
      {true && <ModalComments />}
    </S.Container>
  );
};

export default Feeds;
