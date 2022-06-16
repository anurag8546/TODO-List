import React,{useState} from "react";
import TODOFORM from "./TODOFORM";
import { RiCloseCircleLine } from 'react-icons/ri';
//import { RiBookmark3Fill} from "react-icons/ri";
import { TiEdit } from 'react-icons/ti';
const TODO =({todos, completeTODO, removeTODO, updateTODO })=>{
    const[edit,setEdit]=useState({

        id: null,
        value:''
    });


    
  const submitUpdate = value => {
    updateTODO(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
};


if (edit.id) {
    return <TODOFORM edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo_input, index) => (
    <div
      className={todo_input.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo_input.id} onClick={() => completeTODO(todo_input.id)}>
        {todo_input.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine 
          onClick={() => removeTODO(todo_input.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo_input.id, value: todo_input.text })}
          className='edit-icon'
        />
      </div>
    </div>

  ));

};

export default TODO;
