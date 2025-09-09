import { motion } from "motion/react"
import ScrollTriggered from "./components/FramerComponents/Scroll";
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

const App = () => {
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
      <Gestures />
      <ScrollTriggered />
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