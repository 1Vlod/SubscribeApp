import React from "react"

import { useSelector } from "react-redux"
import { selectTemplates } from "../Redux/slices/templatesSlice"

import { FlatList } from "react-native"
import { Icon, Fab } from "native-base"

import TemplateItem from "../components/TemplatesScreen/TemplateItem"
import { Container } from "native-base"

const TemplatesScreen = ({ navigation }) => {
  const items = useSelector(selectTemplates)

  return (
    <Container >
      <FlatList
        style={{ paddingHorizontal: 15 }}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TemplateItem {...item} navigation={navigation}/>}
      />

      <Fab
        style={{ backgroundColor: 'teal' }}
        position="bottomRight"
        onPress={() => navigation.navigate("CreateSubscribe")}>
        <Icon type="MaterialIcons" name="add-to-photos" style={{ fontSize: 25 }} />
      </Fab>
    </Container>
  )
}


export default TemplatesScreen