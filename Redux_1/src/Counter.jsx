import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement, reset } from './slices/counterSlice'

function Counter() {
    const count = useSelector((state) => {
  return state.counter.value;
});

    const dispatch=useDispatch();
  return (
    <div>
        <h1>counter:{count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(reset())}>reset</button>

    </div>
  )
}

export default Counter