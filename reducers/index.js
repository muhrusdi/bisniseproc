import { combineReducers } from 'redux'

const initialState = {
  togglePageLoad: false,
  toggleSide: false
}

const toggles = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOAD': {
      return {...state, togglePageLoad: action.toggle}
    }
    case 'TOGGLE_SIDE': {
      return {...state, toggleSide: action.toggle}
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  toggles
})