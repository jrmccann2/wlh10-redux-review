import React, { Component } from 'react';

import store, {HANDLE_CHANGE, ADD_TO_LIST} from "../store"

/**
 * A note on the above import:
 * Our store.js exports by default (export default) the result
 * of createStore(reducer) which we are calling "store". This 
 * returns to us an object with some methods on it. Within this
 * component we use one of those methods: dispatch. This will 
 * invoke our reducer function (declared in store.js) and pass
 * in the object that we provide store.dispatch as the action. 
 * 
 * We put our action types: HANDLE_CHANGE and ADD_TO_LIST in 
 * curly brackets because they are not the default export.
 */

class Form extends Component {

  handleChange = (e) => {
    store.dispatch({
      type: HANDLE_CHANGE,
      payload: e.target.value
    })
  }

  handleSubmit = () => {
    store.dispatch({
      type: ADD_TO_LIST
    })
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleChange(e)} placeholder='Add todo'></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Form;