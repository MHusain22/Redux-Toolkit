import React, { useState } from 'react'
import './Todos.css';
import DisplayUsers from './DisplayUsers';
import {useDispatch} from 'react-redux';
import { addUser,deleteAllUser } from '../store/Slices/UserSlice';


const Todos = () => {

    const dispatch=useDispatch();
    const [input,setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(input));
        setInput('');
    }
      
   

  return (
    <div>
        <h1>TODOS</h1>
        <form action="" onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange} type="text" placeholder='ADD TODOS' />
            <button>ADD</button>
        </form>
        <DisplayUsers />
        <button onClick={() => dispatch(deleteAllUser()) }>Delete ALL TODOS</button>
    </div>
  )
}

export default Todos