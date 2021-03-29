import './App.css';
import React,{useState} from 'react'

function Add(arg) {
let [value,setValue] = useState('')
function AddItemToList(){
	if(value.trim()){
		arg.Adding(value)
	}
	setValue("")
}
  return(
    <div className="MyForm">
      <input value={value} onChange={event=>setValue(event.target.value)}/>
      <button onClick={AddItemToList}>Add To List</button>
    </div>
    )
    
}

export default Add;
