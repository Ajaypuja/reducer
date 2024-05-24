import { useReducer } from 'react'
import './App.css'
// mera name chun chun chu
//useReducer
// this a testing
//useReducer()
// return [state, dispatch]

// as an argument

// 1. reducer funtion
//2. initialState

// dispatch function
// we pass object(action) as an argument
//reducer
// state
// action
console.log("hello world")

function reducer(state, action) {
  console.log(state, action)
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 }
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 }
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 }
  }
}
const initialState = {count: 0, firstName: "Harshit"}
  function App() {
//const [state, setState] = useState({count:0}) 
const [state, dispatch] = useReducer(reducer, initialState)
const handleIncrease =()=>{
  dispatch({type: "INCREMENT"})
};
const handleReset=()=>{
  dispatch({type: "RESET"})
};
const handleDecrease = ()=>{
  dispatch({type: "DECREMENT"})
}
    return (
      <>
        <div className='App'>
          <h1> useReducer Tutorial</h1>
          <hr />
          <h2>Hello, {state.firstName}</h2>
          <h2>{state.count}</h2>
          <button onClick={hanleIncrease} ></button>Increase<button button onClick={handleReset}>Reset</button><button onClick={handleDecrease}>Decrease</button>
        </div>
      </>
    )
  }

export default App
