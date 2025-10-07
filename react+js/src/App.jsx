import { motion } from "motion/react"
import ScrollTriggered from "./components/FramerComponents/Scroll";
import { useReducer } from "react";
import { Button } from '@mui/material'
import { useRef } from 'react';
import Stopwatch from "./components/StopWatch";

const App = () => {
  const [tasks, dispatch] = useReducer(formReducer, initialTasks);
  const ref = useRef("Tango");
  console.log("ref",ref);
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
  return (
    <>
    Hello world
    <button onClick={handleClick}>
      Click me!
    </button>
    <Stopwatch />
    </>
  )
}

export default App;

export function Gestures() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={box}
    />
  )
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#9911ff",
  borderRadius: 5,
}

function formReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks, 
        {
        id: action.id,
        text: action.text,
        done: false
      }
    ];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];