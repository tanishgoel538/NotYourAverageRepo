import { motion } from "motion/react"
import ScrollTriggered from "./components/FramerComponents/Scroll";
import { useReducer } from "react";
import { Button } from '@mui/material'

const App = () => {
  const [tasks, dispatch] = useReducer(formReducer, initialTasks);
 
  return (
    <>
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ff0088",
          borderRadius: 5,
          borderTop: '1px solid black'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10 }}
      />

      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#dd00ee",
          borderRadius: "50%"
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 4,
          scale: { type: "spring", visualDuration: 1, bounce: 0.2 },
        }}
      // style={ball}

      />
     {/* PRSERVING STATE REACHED */} 
     {/* todo */}
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
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
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