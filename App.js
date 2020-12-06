import 'react-native-gesture-handler'

import React from 'react'
import { Provider } from "react-redux"
import store from "./src/Redux/store"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import MainHeader from "./src/components/MainScreen/Header"
import MainScreen from "./src/screens/MainScreen"
import TemplatesScreen from "./src/screens/TemplatesScreen"
import CreateSubscribeScreen from "./src/screens/CreateSubscribeScreen"

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "black"
            },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{
              title: "Мои подписки",
              headerRight: () => (
                <MainHeader />
              )
            }}
          />
          <Stack.Screen
            name="Templates"
            component={TemplatesScreen}
            options={{
              title: "Подписки"
            }}
          />
          <Stack.Screen
            name="CreateSubscribe"
            component={CreateSubscribeScreen}
            options={{
              title: "Добавить подписку"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
