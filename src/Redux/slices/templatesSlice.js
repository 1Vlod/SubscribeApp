import { createSlice } from "@reduxjs/toolkit"

let id = 0

const initialState = [
  {
    BGcolor: "hotpink",
    iconName: "tv",
    title: "Netflix",
    id: id++
  },
  {
    BGcolor: "firebrick",
    iconName: "amazon",
    title: "Amazon",
    id: id++
  },
  {
    BGcolor: "indigo",
    iconName: "500px",
    title: "500px",
    id: id++
  },
  {
    BGcolor: "orangered",
    iconName: "apple",
    title: "Apple",
    id: id++
  },
  {
    BGcolor: "limegreen",
    iconName: "phone",
    title: "Phone",
    id: id++
  },
  {
    BGcolor: "limegreen",
    iconName: "phone",
    title: "Phone",
    id: id++
  },
  {
    BGcolor: "limegreen",
    iconName: "phone",
    title: "Phone",
    id: id++
  },
  {
    BGcolor: "limegreen",
    iconName: "phone",
    title: "Phone",
    id: id++
  },
  {
    BGcolor: "limegreen",
    iconName: "phone",
    title: "Phone",
    id: id++
  },
  {
    BGcolor: "limegreen",
    iconName: "phone",
    title: "Phone",
    id: id++
  },
]

export const templatesSlice = createSlice({
  name: "templates",
  initialState
})

export const selectTemplates = state => state.templates

export default templatesSlice.reducer