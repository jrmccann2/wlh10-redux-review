import React, { Component } from 'react';

import store from "../store"


class Display extends Component {
  constructor(){
    super();

    /**
     * Here we create a variable and set it equal to our
     * redux state at time of mounting. Remember that the
     * constructor runs only once when the component is
     * first mounting so this will only get a snapshot of
     * what redux state is at the moment the component mounts.
     * 
     * We then use that snapshot and set our initial component
     * state based off of those values. In this case, whatever
     * was on the todo list.
     */

    const reduxState = store.getState()

    this.state = {
      todoList: reduxState.todoList
    }
  }


  /**
   * In componentDidMount, we set up our subscription
   * to watch for changes to our redux state. We pass
   * store.subscribe a callback function (OH NO! NOT
   * THAT UNFATHOMABLE THING!). This is the function
   * that we want our subscription to run. In this case,
   * whenever there is a change to redux state we are
   * getting the new redux state and set our local component
   * state based on that return value.
   */

  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({todoList: reduxState.todoList})
    })
  }

  render() {
    const mappedToDos = this.state.todoList.map( (todo, index) => {
      return <li key={index}>{todo}</li>
    })

    return (
      <div>
        {mappedToDos}
      </div>
    );
  }
}

export default Display;
