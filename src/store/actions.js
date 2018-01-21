// Import helper lib module
import * as lib from './lib'
// Importing sample JSON data for the state
import data from '../../static/data.json'

// Action to fetch resources and set in state through the mutation
export const fetchResources = ({ commit }) => {
  commit('setResources', data)
}

// Action to add title grid item in the state through the mutation
export const addTitleGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = { 'x': 0, 'y': 0, 'w': 4, 'h': 2, 'i': g, 'type': 'title', 'title': 'Heading 1', 'headings': { 'h1': false, 'h2': false, 'h3': false } }
  commit('setNewGridItem', k)
}

// Action to add content grid item in the state through the mutation
export const addContentGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = { 'x': 0, 'y': 0, 'w': 4, 'h': 3, 'i': g, 'type': 'content', 'content': 'Content goes here' }
  commit('setNewGridItem', k)
}

// Action to add image grid item in the state through the mutation
export const addImageGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = { 'x': 0, 'y': 0, 'w': 4, 'h': 4, 'i': g, 'type': 'image', 'location': 'http://via.placeholder.com/600x350' }
  commit('setNewGridItem', k)
}

// Action to remove item from the state through the mutation
export const removeItem = ({commit, state}, payload) => {
  commit('removeItem', payload)
}

// Action to save updated headings through the mutation
export const saveHeadings = ({commit, state}, payload) => {
  let currentItem = state.resources[payload.itemIndex]
  currentItem.headings.h1 = payload.values[0]
  currentItem.headings.h2 = payload.values[1]
  currentItem.headings.h3 = payload.values[2]
  commit('setUpdatedItem', { itemIndex: payload.itemIndex, item: currentItem })
}

// Action to save item through the mutation
export const saveItem = ({commit, state}, payload) => {
  commit('setUpdatedItem', payload)
}
