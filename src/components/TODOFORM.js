import React, {useState, useEffect, useRef } from 'react';  

function TODOFORM(props) {
const [input, setInput]=useState(props.edit ? props.edit.value : '');


const inputRef = useRef(null)


useEffect(() => {
  inputRef.current.focus()
})



  function handleChange (e) {
    setInput(e.target.value);
  };

  function handleSubmit (e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='TODOFORM'> 
{props.edit ? (
<>
<input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>



<input
type='text'
placeholder="What to do?"
value={input}
name="text"
className='TODOINPUT'
onChange={handleChange}
ref={inputRef}

/>
<button className='TODOBUTTON'>
Add
</button>
</>
      )}
    </form>
    
  );
}

export default TODOFORM;