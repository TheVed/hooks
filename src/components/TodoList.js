import React,{useState} from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = ()=>{

  const [todos, setTodos] = useState([
    {text: 'Pay Bills',id: 1},
    {text: 'Do HomeWork',id: 2},
    {text: 'Feed Dog',id: 3}
  ]);

  const addTodo = (text) => {
      setTodos([
        ...todos,
        {text: text, id: Math.random() }]);
  };

  return(
    <div>
      <ul>
        {todos.map((todo)=>{
          return(
            <li key={todo.id}>{todo.text}</li>
          )
        })}
      </ul>
      <AddNewTodo addTodo={addTodo}/>
    </div>
  )

}

export default TodoList;
