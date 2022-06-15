import React, {useState} from 'react'
import TODOFORM from './TODOFORM'
function TODOLIST() {

    const {todos, setTodo}= useState([])

  return (
    <div>
        <h1>
            Whats up?
        </h1>
    <TODOFORM/>
    </div>
    )
}

export default TODOLIST