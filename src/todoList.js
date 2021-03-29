import Item from './toDoItems';

function ToDoList(arg) {
  return (
  	arg.MyList.map((item,index)=>{
		 return(<Item title={item.title} index={index} Changing={arg.Changing} daone={item.done} Remove={arg.Remove} key={arg.id}/>)
  	})
  )
}


export default ToDoList;
