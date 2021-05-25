import React, { useState } from 'react';

function TodoElement(props) {
    const [isDone, setDone] = useState(false);
    const style = {
        done: {
            display: 'block'
        }
    }
    if(!isDone){
        style.done.display = 'none';
    }
    return (
        <li className='todo-element' onClick={()=>setDone(!isDone)}>
            <div>
                <p style={style.done} className='done'>Done</p>
                <p className='todo-text'>{props.text}</p>
            </div>
            <div>
                <button className='updateButton' onClick={(e)=>{e.stopPropagation(); props.update(props.id)}} >Update</button>
                <button onClick={(e)=>{e.stopPropagation(); props.delete(props.id)}} >Delete</button>
            </div>
        </li>
    );
}

export default TodoElement;