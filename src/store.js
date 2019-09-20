import {createStore} from "redux"

const initialState = {
  inputBox: "",
  todoList: []
}

// ACTION TYPES

export const HANDLE_CHANGE = "HANDLE_CHANGE"
export const ADD_TO_LIST = "ADD_TO_LIST"

function reducer(state = initialState, action){
  switch(action.type){
    case HANDLE_CHANGE:
      return {...state, inputBox: action.payload}
    case ADD_TO_LIST:
      return {...state, todoList: [...state.todoList, state.inputBox]}
    default:
      return state
  }
}

export default createStore(reducer)