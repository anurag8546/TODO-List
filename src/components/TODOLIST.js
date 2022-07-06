import React, {useEffect, useState} from 'react';
import TODOFORM from './TODOFORM';
import TODO from './TODO'

// get the local items

function getlocal(){
  let item=localStorage.getItem('setTodos');
  if(item)
  return JSON.parse(localStorage.getItem('setTodos'));
else
return [];
}

function TODOLIST(){

    const [todos, setTodos]= useState(getlocal());




//It'll add todos in list
const addTodos=todo_input=>{

    //this is the case when user just gives unnecessary spaces
    if(!todo_input.text || /^\s*$/.test(todo_input.text)){
        return;
    }
    const newTodos=[todo_input, ...todos];

    setTodos(newTodos);
    //it'll print the inputs in console along with it's id
    // console.log(todo_input, ...todos);
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
    let updatedTodos=todos.map(todo_input => {
      if (todo_input.id===id) {
        todo_input.isComplete = !todo_input.isComplete;
      }
      return todo_input;
    });
    setTodos(updatedTodos);
  };

  // set the items in the local list 

  useEffect(()=>{
localStorage.setItem('setTodos',JSON.stringify(todos));
  }, [todos]);


  return(
<>


<div>


        <h1>
          Write down your plans below :
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
