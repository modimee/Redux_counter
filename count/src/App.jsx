import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment,multiply } from './counter/CounterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
      <Navbar/>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        currently count is {count} <button onClick={()=> dispatch(multiply())}>*</button>
        <button onClick={() => dispatch(decrement())}>-</button>

      </div>
    </>
  )
}

export default App
