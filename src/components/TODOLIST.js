import React, {useState} from 'react';
import TODOFORM from './TODOFORM';
import TODO from './TODO'
function TODOLIST(){

    const [todos, setTodos]= useState([]);

//It'll add todos in list
const addTodos=todo_input=>{

    //this is the case when user just gives unnecessary spaces
    if(!todo_input.text || /^\s*$/.test(todo_input.text)){
        return;
    }
    const newTodos=[todo_input, ...todos];

    setTodos(newTodos);
    //it'll print the inputs in console along with it's id
    console.log(todo_input, ...todos);
};


// updating the list of todos

const updateTODO=(todoId,newValue)=>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
 
};



//Delete an Item from todo list

const removeTODO=id=>{
    const removedArray=[...todos].filter(todo_input=>todo_input.id!==id);
    setTodos(removedArray);
};


const completeTODO= id => {
    let updatedTodos=todos.map(todo => {
      if (todo.id===id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };



  return(
<>
<div>
        <h1>
            Whats up?
        </h1>
    <TODOFORM onSubmit={addTodos}/>
    
    <TODO
        todos={todos}
        completeTODO={completeTODO}
        removeTODO={removeTODO}
        updateTODO={updateTODO}
      />
    </div>
    </>
    );
}

export default TODOLIST;