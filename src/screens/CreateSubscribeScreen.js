import React, { useState } from "react"

import { Picker } from '@react-native-picker/picker';
import { Form, Input, Item, Label, Fab, Icon } from "native-base"
import { ScrollView } from "react-native"

import { useDispatch } from "react-redux"
import { addSubscribe } from "../Redux/slices/subscribesSlice"

import DatePicker from "../components/CreateSubscribeScreen/DatePicker"
import SubscribeItem from "../components/MainScreen/SubscribeItem"


const CreateSubscribeScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()

  const params = route.params
  const paramsTitle = params?.title || ""

  const [title, setTitle] = useState(paramsTitle)
  const [descr, setDescr] = useState("")
  const [valuta, setValuta] = useState("руб.")
  const [sum, setSum] = useState("0")
  const [frequently, setFrequently] = useState("")
  const [reminderTime, setReminderTime] = useState("")
  const [nextPay, setNextPay] = useState()

  const dispatchSubscribe = () => {
    dispatch(addSubscribe({
      title,
      descr,
      valuta,
      sum,
      frequently,
      nextPay: nextPay.getTime(),
      BGcolor: params?.BGcolor
    }))
  }

  const createSubcribe = () => {
    dispatchSubscribe()
    navigation.navigate("Home")
  }

  return (
    <>
      <ScrollView style={{ marginTop: 15 }}>
        <SubscribeItem title={title} descr={descr} sum={sum} valuta={valuta} nextPay={nextPay} {...params} />
        <Form>
          {!paramsTitle && (<Item floatingLabel style={{ marginLeft: 15, marginRight: 15 }}>
            <Label>Название</Label>
            <Input value={title} onChangeText={setTitle} />
          </Item>)}

          <Item floatingLabel style={{ marginLeft: 15, marginRight: 15 }}>
            <Label>Описание</Label>
            <Input value={descr} onChangeText={setDescr} />
          </Item>

          <Item stackedLabel placeholder="something" style={{ marginTop: 10, marginLeft: 15, marginRight: 15 }}>
            <Label>Нажмите чтобы выбрать валюту</Label>
            <Picker
              selectedValue={valuta}
              style={{ height: 50, width: "100%", marginBottom: "-10%" }}
              dropdownIconColor="#FFFFFF"
              onValueChange={(itemValue, itemIndex) =>
                setValuta(itemValue)
              }>
              <Picker.Item label="Российский рубль" value="руб." />
              <Picker.Item label="Евро" value="€" />
              <Picker.Item label="Доллар" value="$" />
            </Picker>
          </Item>

          <Item floatingLabel style={{ marginLeft: 15, marginRight: 15 }} underline >
            <Label>Сумма</Label>
            <Input value={sum} onChangeText={setSum} />
          </Item>

          <Item stackedLabel>
            <Label>Частота платежей</Label>
            <Picker
              selectedValue={frequently}
              style={{ height: 50, width: "100%", textAlign: "left" }}
              dropdownIconColor="#FFFFFF"
              onValueChange={(itemValue, itemIndex) =>
                setFrequently(itemValue)
              }>
              <Picker.Item label="Раз в неделю" value="week" />
              <Picker.Item label="Каждый месяц" value="month" />
              <Picker.Item label="Раз в три месяца" value="monthTree" />
              <Picker.Item label="Раз в год" value="year" />
              <Picker.Item label="Раз в две недели" value="weekTwo" />
              <Picker.Item label="Раз в полгода" value="yearHalf" />
            </Picker>
          </Item>

          <Item stackedLabel style={{ marginLeft: 15, marginRight: 15 }}>
            <Label>Первый платеж</Label>
            <DatePicker onChange={setNextPay} />
          </Item>

          <Item stackedLabel placeholder="something" style={{ marginTop: 10, marginLeft: 15, marginRight: 15 }}>
            <Label>Напоминание</Label>
            <Picker
              selectedValue={reminderTime}
              style={{ height: 50, width: "100%", marginBottom: "-10%" }}
              dropdownIconColor="#FFFFFF"
              onValueChange={(itemValue, itemIndex) =>
                setReminderTime(itemValue)
              }>
              <Picker.Item label="Не напоминать" value="never" />
              <Picker.Item label="За день" value="oneDay" />
              <Picker.Item label="За два дня" value="twoDays" />
              <Picker.Item label="За три дня" value="threeDays" />
              <Picker.Item label="За неделю" value="oneWeek" />
              <Picker.Item label="За две недели" value="twoWeeks" />
              <Picker.Item label="За месяц" value="oneMonth" />
            </Picker>
          </Item>
        </Form>
      </ScrollView>
      {!title || (
        <Fab
          style={{ backgroundColor: 'teal' }}
          position="bottomRight"
          onPress={createSubcribe}>
          <Icon type="MaterialIcons" name="done" style={{ fontSize: 25 }} />
        </Fab>
      )}
    </>
  )
}

export default CreateSubscribeScreen