import {FlatList } from "react-native";
import React from "react";
import ChatListItem from "../componeents/ChatListItem";
import chats from "../../assets/data/chats.json"

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={{backgroundColor:'white'}}
    />
  );
};

export default ChatsScreen;
