import React, { useReducer, useState } from "react";
import Todo from "./todo";

function reducer(todos, action){
    console.log(todos);
    console.log(action);
    switch (action.type) {
        case 'add':
            return [...todos, action.payload]
        case 'completed':
            return todos.map((todo)=>{
                if (todo.taskname === action.payload) {
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo;
            })
        case 'remove':
            return todos.filter((todo)=>todo.taskname !== action.payload)
        default:
            break;
    }
}

function Todolist(){
    const [task, setTask] = useState('');
    const [todos, dispatch] = useReducer(reducer, []);
    var handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'add', payload: {taskname: task, isCompleted: false}})
        setTask('');
    }
    return(
        <div className="todolist">
            <form>
                <input type="text" placeholder="Enter task" onChange={(e)=>setTask(e.target.value)} value={task}/>
                <button onClick={handleSubmit}>Add task</button>
            </form>
            {todos.map((todo)=><Todo todo={todo} dispatchfn={dispatch}/>)}
        </div>
    )
}

export default Todolist;