import React from 'react'

import { Container, H2, Icon, Text, Fab } from 'native-base'

import List from "../components/MainScreen/List"

import { useSelector } from "react-redux"
import { selectSubscribes } from "../Redux/slices/subscribesSlice"

const MainScreen = ({ navigation }) => {
  const items = useSelector(selectSubscribes)

  return (
    <Container>
      {items.length > 0
        ? <List items={items} />
        : (
          <Container style={{ justifyContent: "center", alignItems: "center" }}>
            <H2>Здесь пока пусто</H2>
            <Text style={{ width: "80%", textAlign: "center", fontSize: 17 }}>Добавьте первую подписку с помощью кнопки внизу</Text>
          </Container>
          )}


      <Fab
        style={{ backgroundColor: 'teal' }}
        position="bottomRight"
        onPress={() => navigation.navigate("Templates")}>
        <Icon type="AntDesign" name="plus" style={{ fontSize: 25 }} />
      </Fab>
    </Container>
  )
}

export default MainScreen