import { combineReducers } from 'redux'
import blogs from './blogs'

const initialState = {
  togglePageLoad: false,
  toggleSide: false,
  toggleSearch: false
}

const toggles = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOAD': {
      return {...state, togglePageLoad: action.toggle}
    }
    case 'TOGGLE_SIDE': {
      return {...state, toggleSide: action.toggle}
    }
    case 'TOGGLE_SEARCH': {
      return {...state, toggleSearch: action.toggle}
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  toggles,
  blogs
})