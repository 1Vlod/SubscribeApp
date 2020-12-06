import React from "react"
import { StyleSheet, Text } from "react-native"

import { Container, H2, Icon, Fab, Button } from 'native-base'


const TemplateItem = ({ iconName = "home", title = "None", BGcolor = "#f52", navigation }) => {

  return (
    <Button 
      block 
      style={[styles.btn, {backgroundColor: `${BGcolor}`}]}
      onPress={() => navigation.navigate("CreateSubscribe", { iconName, title, BGcolor})}  
    >
      <Icon type="FontAwesome5" name={iconName} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    paddingTop: 15,
    height: 83,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 18,
    color: "#fff"
  },
  icon: {
    marginRight: 15, 
    fontSize: 30
  }
})

export default TemplateItem



