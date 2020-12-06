import React from 'react'

import { View, StyleSheet } from "react-native"
import { Icon } from "native-base"

const MainHeader = () => {

  return (
      <View style={styles.container}>
        <Icon type="FontAwesome" name="cog" style={styles.whiteColor}/>
        <Icon type="MaterialIcons" name="info-outline" style={styles.whiteColor}/>
        <Icon type="MaterialIcons" name="sort" style={styles.whiteColor}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    width: 130,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  whiteColor: {
    color: "#fff"
  }
})

export default MainHeader
