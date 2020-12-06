import { createSlice } from "@reduxjs/toolkit"

let id = 0

export const subscribesSlice = createSlice({
  name: "subscribes",
  initialState: [],
  reducers: {
    addSubscribe: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (subscribeInfo) => {
        return { payload: { id: id++, ...subscribeInfo }}
      }
    }
  }

})

export const { addSubscribe } = subscribesSlice.actions

export const selectSubscribes = state => state.subscribes

export default subscribesSlice.reducer