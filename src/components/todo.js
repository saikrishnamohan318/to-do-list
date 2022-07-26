import React from "react";
import tick from '../images/tick.png';
import bin from '../images/bin.png';

function Todo({todo, dispatchfn}) {
    return (
        <div className="todo">
            <span style={{textDecorationLine: todo.isCompleted ? 'line-through' : 'none'}}>{todo.taskname}</span>
            <div>
                <button onClick={()=>dispatchfn({type: 'completed', payload: todo.taskname})}><img src={tick} alt='tick'/></button>
                <button onClick={()=>dispatchfn({type: 'remove', payload: todo.taskname})}><img src={bin} alt='bin'/></button>
            </div>
        </div>
    )
}
export default Todo;