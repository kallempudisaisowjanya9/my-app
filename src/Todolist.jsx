import React from 'react'
import Todo from './Todo';

function Todolist() {
 var [todos,setTodo]=   React.useState(['get bmw',['get benz'],['get audi']]);
 function addTodo(){
    var nt= document.getElementById('d1').value;
    setTodo([...todos,nt]);
 }
  return (
    <div><h3>Todolist
        </h3>
        <input type="text" id="d1" placeholder='Enter todo'  />
        <button onClick={()=>addTodo()}>Add todo</button>
        {
            todos.map((todo)=>{
              
                return(<Todo t={todo}></Todo>)
            })
        }
    </div>
  )
}

export default Todolist