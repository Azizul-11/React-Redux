import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from './CounterSlice';

const Counter = () => {

    const count=useSelector((state)=> state.counter.value);
    const dispatch=useDispatch();



  return (
    <div>
      <div>
        <button aria-label='increment Value'
        onClick={()=>dispatch(increment())}
        >Increment</button>

        <span>{count}</span>
        
        <button aria-label='decrement Value'
        onClick={()=>dispatch(decrement())}
        >Decrement</button>
        <br/>
        <button aria-label='Increment Value'
        onClick={()=>dispatch(incrementByAmount(100))}
        >increment By 100</button>
        <br/>
        <button aria-label='Increment Value'
        onClick={()=>dispatch(decrementByAmount(100))}
        >decrement By 100</button>
       
      </div>
    </div>
  )
}

export default Counter
