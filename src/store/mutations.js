/* eslint-disable */
import Vue from 'vue'
import _ from 'lodash'
export const setResources = (state, resources) => {
  state.resources = resources || {}
}

export const setNewGridItem = (state, payload) => {
  state.resources.push(payload)
}
export const removeItem = (state, payload) => {
  if (payload.key > -1) {
    state.resources.splice(payload.key, 1)
  }
}

export const setUpdatedHeadings = (state, response) => {
    state.resources[response.itemIndex] = response.item
}

export const setUpdatedItem = (state, response) => {
    state.resources[response.itemIndex] = response.item
}

export const LOADING_ON = (state) => { state.isLoading = true }
export const LOADING_OFF = (state) => { state.isLoading = false }
