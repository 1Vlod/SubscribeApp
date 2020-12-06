import React from "react"

import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

import { Icon } from 'native-base'

const SubscribeItem = ({
  BGcolor = "#2196F3",
  iconName = "star",
  title = "",
  descr = "",
  sum = "0",
  nextPay = "",
  valuta,
  style
  }) => {

  return (
    <TouchableHighlight style={{ height: 100, ...style }} underlayColor="white" onPress={() => alert("здесь должно быть изменение цвета")}>
      <View style={[styles.container, { backgroundColor: `${BGcolor}` }]}>
        <Icon type="FontAwesome5" name={iconName} style={{ flex: 1, color: "white" }} />
        <View style={{ flex: 7 }}>
          <View style={styles.row}>
            <Text style={styles.whiteText}>{title}</Text>
            <Text style={styles.whiteText}>{sum + valuta}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.whiteText}>{descr}</Text>
            <Text style={styles.whiteText}>{calculateTime(nextPay)}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    backgroundColor: "blue", 
    padding: 10, 
    marginHorizontal: 15, 
    flex: 1 
  },
  row: {
    flex: 1,  
    justifyContent: "space-between",
    flexDirection: "row"
  },
  whiteText: {
    color: "#fff",
    fontSize: 18
  }
})

export default SubscribeItem

function calculateTime(time) {

  if (!time) {
    return time
  }

  const now = new Date()
  const differ = time - now
  const nextPayDate = Math.ceil(differ / 1000 / 60 / 60 / 24)

  switch(nextPayDate) {
    case 0:
      return "Сегодня"
    case 1:
      return "Завтра"
    default:
      return `Через ${nextPayDate} д.`
  }
}