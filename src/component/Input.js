


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setinputvalue, addbutton, removebutton, editbutton, saveedits } from '../features/todoSlice';
import './input.css'

function Input() {
    const dispatch = useDispatch();
    const inputbar = (e) => {
        dispatch(setinputvalue(e.target.value));
    };
    const inputvalue = useSelector((state) => state.todo.inputvalue);
    const item = useSelector((state) => state.todo.addvalue);
    const editedid = useSelector((state) => state.todo.editedid);

    return (
        <div className="container">
            <div>
                <input value={inputvalue} onChange={inputbar} type="text" placeholder="Enter your task..." />
                {
                    !editedid ? (
                        <button onClick={() => dispatch(addbutton())}>Add</button>
                    ) : (
                        <button onClick={() => dispatch(saveedits())}>Save</button>
                    )
                }
                <ul className="todo-list">
                    {
                        item.map((item) => (
                            <li key={item.id} className="todo-item">
                                {item.text}
                                <div>
                                    <button onClick={() => dispatch(editbutton(item.id))}>Edit</button>
                                    <button onClick={() => dispatch(removebutton(item.id))}>Remove</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Input;
