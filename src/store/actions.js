/* eslint-disable */
import * as api from '@/api'
import * as lib from './lib'
import data from '../../static/data.json'

export const fetchResources = ({ commit }) => {
  commit('LOADING_ON')
  commit('setResources', data)
  commit('LOADING_OFF')
}

// add grid to the page 
export const addTitleGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = { 'x':0, 'y':0, 'w':4, 'h':2, 'i': g, 'type': 'title', 'title': 'Heading 1', 'headings': { 'h1': false, 'h2': false, 'h3': false } }
  commit('setNewGridItem', k)
}

export const addContentGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = { 'x':0, 'y':0, 'w':4, 'h':3, 'i': g, 'type': 'content', 'content': 'Content goes here' }
  commit('setNewGridItem', k)
}

export const addImageGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = { 'x':0, 'y':0, 'w':4, 'h':4, 'i': g, 'type': 'image', 'location': 'http://via.placeholder.com/600x350' }
  commit('setNewGridItem', k)
}

export const removeItem = ({commit, state}, payload) => {
  commit('removeItem', payload)
}

export const saveHeadings = ({commit, state}, payload) => {
  let currentItem = state.resources[payload.itemIndex]
  currentItem.headings.h1 = payload.values[0]
  currentItem.headings.h2 = payload.values[1]
  currentItem.headings.h3 = payload.values[2]
  commit('setUpdatedHeadings', { itemIndex: payload.itemIndex, item: currentItem })
}

export const saveItem = ({commit, state}, payload) => {
  commit('setUpdatedItem', payload)
}

 export const loadingOn = ({commit}) => { 
    commit('LOADING_ON')
  }

  export const loadingOff = ({commit}) => {
    commit('LOADING_OFF')
  }
