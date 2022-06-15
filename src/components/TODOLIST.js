import React, {useState} from 'react';
import TODOFORM from './TODOFORM';
function TODOLIST(){

    const {todos, setTodos}= useState([]);

//It'll add todos in list
const addTodos=todo_input=>{

    //this is the case when user just gives unnecessary spaces
    if(!todo_input.text || /^\s*$/.test(todo_input.text)){
        return;
    }
    const newTodos={todo_input, ...todos};

    setTodos(newTodos);
    console.log(todo_input, ...todos);
};
  return(
    <div>
        <h1>
            Whats up?
        </h1>
    <TODOFORM onSubmit={addTodos}/>
    </div>
    );
}

export default TODOLIST;