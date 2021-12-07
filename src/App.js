import logo from "./logo.svg";
import "./App.css";
import React , {useState} from 'react'
import {DEFAULT_QUESTIONS, ALL_QUESTIONS} from './questions'

function App() {

const firstQs = DEFAULT_QUESTIONS.map(question => question = ALL_QUESTIONS[question])
//console.log(firstQs)

  const [qs, setQs] = useState(firstQs)
  const [form,setForm] = useState([])
  const [i,setI] = useState(0)
  const [current, setCurrent] = useState(qs[i])
 
  const addQueue = (value) => {
    const {if_yes_ask, if_no_ask} = current
    const yQs = if_yes_ask.map(q=>ALL_QUESTIONS[q])
    console.log(yQs)
    const nQs = if_no_ask.map(q=>ALL_QUESTIONS[q])
    value === 'yes' && setQs([...qs, ...yQs])
   //console.log(qs)
   value === 'no' && setQs([...qs, ...nQs])
    
  }

  const onSelect = e => {
    addQueue(e.target.value)
    setForm([...form, {...current, answer:e.target.value}])

  }

  const next = () => {
    setI(i+1)
    setCurrent(qs[i+1])
    console.log(current)
  }
  const submit=() => {

    /* axios.post(url, form) */

    console.log(form)
  }
  return (
    <div className="App">
      <div>
        <div>{current ? current.wording : "All finished hit sumbit"}</div>
        <button value='yes' onClick={onSelect}>yes</button>
        <button value='no' onClick={onSelect}>no</button>

        <button onClick={next}>next</button>

        
      </div>

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
