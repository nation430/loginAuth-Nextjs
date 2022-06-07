import { useState } from "react";
import uniqud from 'uniqid'; //npm install uniqid
import Todo from '../components/Todo';


const TodoPage = props =>{
    const [todos, setTodos] = useState([
        {
            id: uniqud(),
            text: 'List of things to do',
            completed:false,
        },


        {
            id: uniqud(),
            text: 'How was it?',
            completed:true,
        },
    ])
    const [value, setValue] = useState('');
    const addTodo = (e) =>{
        e.preventDefault();
        const newTodos = [...todos];
        newTodos.push({
            id: uniqud(),
            completed:false,
            text:value,
        })
        setTodos(newTodos);
        setValue('');
    }
 return(
    <div className="w-[50%] h-[100vh] bg-gray-700 flex flex-col text-white p-2 items-center space-y-4">
    <h1 className="uppercase pt-6 font-bold">List Items</h1>
    <form onSubmit={addTodo} className="w-[40%] space-x-2 flex">
        <input className="bg-gray-900 outline-none text-[0.8em] 
        rounded-[5px] flex-grow indent-4" 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
       
        />
        <button className='bg-gray-800 px-2 rounded-[5px] active:bg-gray-600'>Add</button>
    </form>

    <div className="w-[40%] min-h-[35vh] border-none flex flex-col relative bg-gray-500 shadow-lg rounded-[20px]">

       
        {
            todos.map(({id, text, completed}) =>
            {
                return(
                  <Todo 
                  id={id}
                  completed={completed}
                  text={text}
                  todos={todos}
                  setTodos={setTodos}

                  />
                )
            }
            
                
                )
        }

    </div>

</div>
 )
}

export default TodoPage;