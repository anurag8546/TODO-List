import React, {useState} from 'react'

function TODOFORM(props) {
const [input, setInput]=useState('')

const handlechange=e=>{
    setInput(e.target.value)
}

const handleSubmit=e=>{
e.preventDefault();
// props.onSubmit({
// id: Math.floor(Math.random()*1000),
// text:input



// });
setInput('');
};

  return (
    <form
    className='TODOFORM'  onSubmit={handleSubmit}> 
<input
type='text'
placeholder="What to do?"
value={input}
name="text"
className='TODOINPUT'
onChange={handlechange}
/>
<button className='TODOBUTTON'>
ADD
</button>
    </form>
    
  )
}

export default TODOFORM