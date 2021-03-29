import './App.css';
import React, { useEffect } from 'react'
import List from './todoList';
import AddToList from './AddToDo.js';


function App() {
  var [TodoLists,setTodos] = React.useState([
    {id:1,done:false,title:"Learn React"},
    {id:2,done:false,title:"Earn Money"},
    {id:3,done:false,title:"Enjoy"}
  ])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then(data => setTodos(data))
  },[])
  function Changed(id){
      setTodos(TodoLists.map((item,index)=>{
        if(index === id){
          item.done= !item.done
        }
        return item
      })
    )
  }
  function RemoveItemm(id){
    setTodos(TodoLists.filter((item,index)=>{
        if(index != id){
          return item
        }
    })
    )
  }
  function AddItems(text){
    setTodos(TodoLists.concat([{id:TodoLists.length+1,title:text,done:false}]))
  }
  let textInput = React.createRef()
  return (
    <div className="myList">
    <AddToList Adding={AddItems}/>
    {TodoLists.length ? <List MyList={TodoLists} Changing={Changed} Remove={RemoveItemm} />: <p align="center">Nothing Todo</p>}
       
    </div>
  );
}

export default App;
