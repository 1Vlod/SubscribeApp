import { configureStore } from "@reduxjs/toolkit"

import templatesReducer from "./slices/templatesSlice"
import subscribesReducer from "./slices/subscribesSlice"

export default configureStore({
  reducer: {
    templates: templatesReducer,
    subscribes: subscribesReducer
  }
})