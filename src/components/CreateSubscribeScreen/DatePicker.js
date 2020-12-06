import React, { useState } from 'react'

import { Container, DatePicker } from 'native-base'


const DatePickerComponent = ({ onChange }) => {

  return (
    <Container style={{ marginTop: 7, marginLeft: "-4%", height: 30, backgroundColor: "transparent"}}>
      <DatePicker
        defaultDate={new Date()}
        minimumDate={new Date(2020, 1, 1)}
        maximumDate={new Date(2021, 12, 31)}
        locale={"en"}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText="Нажмите чтобы выбрать дату первого плате..."
        textStyle={{ color: "green" }}
        placeHolderTextStyle={{ color: "#d3d3d3" }}
        onDateChange={onChange}
        disabled={false}
      />
    </Container>
  )
}

export default DatePickerComponent