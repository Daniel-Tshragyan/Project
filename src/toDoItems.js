
function ToDoItem(arg) {
	let classes = []
	if(arg.daone == true){
		classes.push("done")
	}

  return (
  	
    <li>
    
    	<span className={classes.join(" ")}>
    		<input type="checkbox" onChange={() => arg.Changing(arg.index)} checked={arg.done}/>
			<strong className="todoId">{arg.index + 1}</strong>
	    	{arg.title}
    	</span>
    	<button onClick={()=>arg.Remove(arg.index)}>&times;</button>	
    </li>
  );
}

export default ToDoItem;
