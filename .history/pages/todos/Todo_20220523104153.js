import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import { useState } from "react";

const Todo = ({id, text, completed, todos, setTodos})=>{
    const [editMode, setEditMode] = useState(false);
    const [editValue, setEditValue] = useState(text);
    const handleDelete=(e) =>{
        e.preventDefault();
        let newTodos = [...todos];
        newTodos = newTodos.filter(el =>el.id !== id);
        setTodos(newTodos);
    }

    const handleEdit =(e) =>{
        e.preventDefault();
        const newTodos = [...todos];
        const index = newTodos.findIndex(el=>el.id === id);
        newTodos[index]={
            ...newTodos[index],
            text:editValue,
        }
        setTodos(newTodos);
        setEditValue('');
        setEditMode(false);
    }
    const handleCheckBox = (e) =>{
        const newTodos = [...todos];
        const index = newTodos.findIndex(el=>el.id === id);
        newTodos[index]={
            ...newTodos[index],
           completed: !newTodos[index].completed,
        }
        setTodos(newTodos);

    }
    return(
        <div className="flex w-[100%] text-[0.7em] justify-between px-4 pt-4 space-x-2 text-sm">
            <div className="flex items-center space-x-2 font-bold ">
                <input type="checkbox" 
                checked = {completed} 
                onChange ={handleCheckBox}
                />
                {
                    editMode?(
                        <form onSubmit={handleEdit}>
                                    <input type = 'text'
                                  value={editValue}
                                  onChange={(e) => setEditValue (e.
                                target.value)}
                               className="bg-gray-800 outline-none px-2 w-[100%]"
                    />


                        </form>

                
                    ):
                    (
                        <div>{text}</div>
                    )
                    
                }
               
            </div>
            <div className="flex">
            <EditIcon className='w-6 hover:cursor-pointer 
            hover:opacity-80 transition-all'
            onClick={(e) => setEditMode(true)}
             />
             <DeleteIcon className='w-6 hover:cursor-pointer 
             hover:opacity-80 transition-all'
             onClick={handleDelete}
              />
            </div>
            
        </div>
    )
   }

   export default Todo;