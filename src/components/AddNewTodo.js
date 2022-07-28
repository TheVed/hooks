import React,{useState} from 'react';

const AddNewTodo = (props) => {

  const [todos,setTodos] = useState('');

  const handleSubmit = (event)=>{
    event.preventDefault();
    props.addTodo(todos);
    setTodos('');
  };

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor='todo'>To Do</label>
      <input type='text' value={todos} id='todo' onChange={(event)=>setTodos(event.target.value)} />
      <input type='submit' />
    </form>
  )
}

export default AddNewTodo;
