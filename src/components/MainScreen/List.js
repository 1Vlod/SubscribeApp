import React from 'react'

import { FlatList } from "react-native"

import SubscribeItem from "./SubscribeItem"

const List = ({ items }) => {

  return (
    <FlatList
      data={items}
      keyExtractor={items => items.id}
      renderItem={({ item }) => <SubscribeItem {...item} style={{ marginTop: 10}}/>}
    />
  )
}

export default List